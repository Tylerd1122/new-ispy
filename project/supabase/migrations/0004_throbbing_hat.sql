/*
  # Update initial felonies count

  1. Changes
    - Sets the initial felonies count to 2
*/

-- Update the count to 2 for all records (there should be only one)
UPDATE incidents 
SET count = 2 
WHERE count != 2;