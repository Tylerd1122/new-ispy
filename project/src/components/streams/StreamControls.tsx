import React from 'react';
import { Monitor } from 'lucide-react';
import { StreamStatus } from './StreamStatus';
import StreamReactions from './StreamReactions';
import SocialLinks from './SocialLinks';

interface StreamControlsProps {
  streamCount: number;
  currentIndex: number;
  streamId: string;
}

const StreamControls = ({ streamCount, currentIndex, streamId }: StreamControlsProps) => {
  return (
    <div className="bg-black/50 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Monitor className="w-4 h-4 text-green-500" />
        <h3 className="text-lg font-mono text-green-500">Stream Controls</h3>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: streamCount }).map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full ${
              index === currentIndex ? 'bg-green-500' : 'bg-green-900/50'
            }`}
          />
        ))}
      </div>

      <StreamStatus currentIndex={currentIndex} totalStreams={streamCount} />
      
      <div className="mt-4 border-t border-green-900/30 pt-4">
        <StreamReactions streamId={streamId} />
      </div>

      <SocialLinks />
    </div>
  );
};

export default StreamControls;