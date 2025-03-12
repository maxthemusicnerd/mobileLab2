import { supabase } from './supabase';

export const getGames = async () => {
  const { data, error } = await supabase.from('sampledatabase').select('*');
  if (error) {
    console.error('Error fetching games:', error);
    return [];
  }
  return data;
};
