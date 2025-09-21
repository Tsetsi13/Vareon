/*
  # Change consultation table ID from bigint to UUID

  1. Changes
    - Drop existing id column (bigint)
    - Add new id column with UUID type
    - Set UUID generation as default
    - Recreate primary key constraint

  2. Security
    - Maintains existing RLS policies
    - No changes to permissions

  Note: This will remove existing data in the table. If you have important data, 
  export it first before running this migration.
*/

-- Drop existing primary key constraint
ALTER TABLE consultations DROP CONSTRAINT IF EXISTS consultations_pkey;

-- Drop the existing id column
ALTER TABLE consultations DROP COLUMN IF EXISTS id;

-- Add new UUID id column with default UUID generation
ALTER TABLE consultations ADD COLUMN id uuid PRIMARY KEY DEFAULT gen_random_uuid();

-- Recreate the primary key constraint (should already be set from above, but being explicit)
ALTER TABLE consultations ADD CONSTRAINT consultations_pkey PRIMARY KEY (id);