/*
  # Change id column to UUID

  1. Changes
    - Drop existing id column (bigint)
    - Add new id column as uuid with auto-generation
    - Set as primary key

  2. Security
    - Maintains existing RLS policies
*/

-- Drop the existing primary key constraint
ALTER TABLE consultations DROP CONSTRAINT consultations_pkey;

-- Drop the existing id column
ALTER TABLE consultations DROP COLUMN id;

-- Add new uuid id column with default value
ALTER TABLE consultations ADD COLUMN id uuid PRIMARY KEY DEFAULT gen_random_uuid();