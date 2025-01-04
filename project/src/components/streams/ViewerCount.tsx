import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const ViewerCount = ({ streamId }: { streamId: string }) => {
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    // Generate initial viewer count between 5-55
    const generateViewerCount = () => {
      // Special handling for specific streams to maintain higher averages
      if (streamId === 'i278-lee-ave' || streamId === 'thruway-204') {
        return Math.floor(Math.random() * (55 - 34) + 34); // 34-55 range
      }
      return Math.floor(Math.random() * (34 - 5) + 5); // 5-34 range
    };

    setViewerCount(generateViewerCount());

    // Update viewer count every 5-15 seconds
    const interval = setInterval(() => {
      setViewerCount(generateViewerCount());
    }, Math.random() * (15000 - 5000) + 5000);

    return () => clearInterval(interval);
  }, [streamId]);

  return (
    <div className="flex items-center gap-2 mt-2">
      <Users className="w-4 h-4 text-cyan-400" />
      <span className="text-cyan-400 text-sm font-mono">
        {viewerCount.toLocaleString()} watching
      </span>
    </div>
  );
};

export default ViewerCount;