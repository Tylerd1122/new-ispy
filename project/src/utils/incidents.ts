import { supabase } from '../lib/supabase';

export const initializeIncidents = async () => {
  // First, check if we have any records
  const { data } = await supabase
    .from('incidents')
    .select('count')
    .limit(1)
    .single();

  // If count is not 2, set it to 2
  if (!data || data.count !== 2) {
    await supabase
      .from('incidents')
      .update({ 
        count: 2,
        last_increment: new Date().toISOString()
      })
      .not('id', 'is', null);
  }
};