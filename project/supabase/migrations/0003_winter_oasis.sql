/*
  # Add incidents tracking

  1. New Tables
    - `incidents`
      - `id` (uuid, primary key)
      - `count` (integer)
      - `last_increment` (timestamp)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `incidents` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS incidents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  count integer DEFAULT 0,
  last_increment timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE incidents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read incidents"
  ON incidents
  FOR SELECT
  TO public
  USING (true);

-- Insert initial record if not exists
INSERT INTO incidents (id, count)
SELECT gen_random_uuid(), 0
WHERE NOT EXISTS (SELECT 1 FROM incidents LIMIT 1);