import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const IncidentCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Initial fetch
    const fetchCount = async () => {
      const { data } = await supabase
        .from('incidents')
        .select('count')
        .limit(1)
        .single();
      
      if (data) {
        setCount(data.count);
      }
    };

    fetchCount();

    // Subscribe to changes
    const subscription = supabase
      .channel('incidents')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'incidents'
        },
        (payload) => {
          if (payload.new) {
            setCount(payload.new.count);
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 mt-4 p-2 bg-red-500/10 rounded-lg border border-red-500/30">
      <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
      <div className="font-mono">
        <span className="text-red-500">Felonies: </span>
        <span className="text-red-400">{count}</span>
      </div>
    </div>
  );
};

export default IncidentCounter;