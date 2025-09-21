/*
  # Allow public consultation form submissions

  1. Security
    - Create policy to allow anonymous users to insert consultation data
    - This enables the consultation form to work for unauthenticated visitors
    - Only allows INSERT operations, no SELECT/UPDATE/DELETE for security

  2. Changes
    - Add INSERT policy for 'anon' role on consultations table
    - Policy allows any anonymous user to submit consultation forms
*/

-- Create policy to allow anonymous users to insert consultation data
CREATE POLICY "Allow anonymous consultation submissions"
  ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);