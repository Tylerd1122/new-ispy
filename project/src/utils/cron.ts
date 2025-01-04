import { supabase } from '../lib/supabase';

export const incrementIncidentCount = async () => {
  const timeAgo = new Date();
  timeAgo.setMinutes(timeAgo.getMinutes() - 90); // 1.5 hours = 90 minutes

  const { data } = await supabase
    .from('incidents')
    .select('id, count, last_increment')
    .limit(1)
    .single();

  if (data && new Date(data.last_increment) < timeAgo) {
    await supabase
      .from('incidents')
      .update({ 
        count: data.count + 1,
        last_increment: new Date().toISOString()
      })
      .eq('id', data.id);
  }
};