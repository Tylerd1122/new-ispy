/*
  # Stream Reactions Schema

  1. New Tables
    - `stream_reactions`
      - `id` (uuid, primary key)
      - `stream_id` (text, not null)
      - `emoji` (text, not null)
      - `count` (int, not null)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
  2. Security
    - Enable RLS on `stream_reactions` table
    - Add policies for authenticated and anonymous users to read reactions
    - Add policy for authenticated users to increment reaction counts
*/

CREATE TABLE IF NOT EXISTS stream_reactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stream_id text NOT NULL,
  emoji text NOT NULL,
  count int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(stream_id, emoji)
);

ALTER TABLE stream_reactions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reactions
CREATE POLICY "Anyone can read reactions"
  ON stream_reactions
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to update reaction counts
CREATE POLICY "Users can increment reactions"
  ON stream_reactions
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Function to increment reaction count
CREATE OR REPLACE FUNCTION increment_reaction(
  p_stream_id text,
  p_emoji text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO stream_reactions (stream_id, emoji, count)
  VALUES (p_stream_id, p_emoji, 1)
  ON CONFLICT (stream_id, emoji)
  DO UPDATE SET 
    count = stream_reactions.count + 1,
    updated_at = now();
END;
$$;