/*
  # Create registrations table for Nodedathon

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `telegram` (text)
      - `eth_address` (text)
      - `email` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `registrations` table
    - Add policy for authenticated users to read their own data
    - Add policy for inserting new registrations
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  telegram text NOT NULL,
  eth_address text NOT NULL,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert registrations"
  ON registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read own registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE email = registrations.email
  ));