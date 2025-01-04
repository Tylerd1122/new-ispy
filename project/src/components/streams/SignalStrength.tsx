import React, { useState, useEffect } from 'react';
import { Signal } from 'lucide-react';

const SignalStrength = () => {
  const [strength, setStrength] = useState(90);

  useEffect(() => {
    const updateStrength = () => {
      // Generate a random value between 75 and 100
      const newStrength = Math.floor(Math.random() * (100 - 75) + 75);
      setStrength(newStrength);
    };

    // Update every 2 seconds
    const interval = setInterval(updateStrength, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Signal className="w-4 h-4 text-green-500 animate-pulse" />
      <span className="text-green-500 text-sm">
        Signal Stable <span className="font-mono">{strength}%</span>
      </span>
    </div>
  );
};

export default SignalStrength;