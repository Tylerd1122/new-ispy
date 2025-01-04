/*
  # Update Stream Reactions Schema

  1. Changes
    - Add update policy for reactions
    - Add increment_reaction function
    - Make policy creation idempotent
*/

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS increment_reaction(text, text);

-- Create or replace the increment_reaction function
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

-- Add update policy if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE tablename = 'stream_reactions'
    AND policyname = 'Users can increment reactions'
  ) THEN
    CREATE POLICY "Users can increment reactions"
      ON stream_reactions
      FOR UPDATE
      TO public
      USING (true)
      WITH CHECK (true);
  END IF;
END
$$;