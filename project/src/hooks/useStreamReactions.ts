import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Reaction {
  emoji: string;
  count: number;
}

const DEFAULT_REACTIONS: Reaction[] = [
  { emoji: '💀', count: 0 },
  { emoji: '❤️', count: 0 },
  { emoji: '😱', count: 0 },
];

export const useStreamReactions = (streamId: string) => {
  const [reactions, setReactions] = useState<Reaction[]>(DEFAULT_REACTIONS);

  useEffect(() => {
    // Reset reactions when stream changes
    setReactions(DEFAULT_REACTIONS);

    // Initial fetch of reactions for this stream
    const fetchReactions = async () => {
      const { data } = await supabase
        .from('stream_reactions')
        .select('emoji, count')
        .eq('stream_id', streamId);

      if (data) {
        setReactions(prev => 
          prev.map(reaction => {
            const dbReaction = data.find(r => r.emoji === reaction.emoji);
            return dbReaction ? { ...reaction, count: dbReaction.count } : reaction;
          })
        );
      }
    };

    fetchReactions();

    // Subscribe to reaction changes for this stream
    const subscription = supabase
      .channel(`stream-reactions-${streamId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'stream_reactions',
          filter: `stream_id=eq.${streamId}`,
        },
        (payload) => {
          if (payload.new) {
            setReactions(prev =>
              prev.map(reaction =>
                reaction.emoji === payload.new.emoji
                  ? { ...reaction, count: payload.new.count }
                  : reaction
              )
            );
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [streamId]);

  const addReaction = async (emoji: string) => {
    await supabase.rpc('increment_reaction', {
      p_stream_id: streamId,
      p_emoji: emoji,
    });
  };

  return { reactions, addReaction };
};