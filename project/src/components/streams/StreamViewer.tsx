import React, { useState } from 'react';
import { MonitorPlay } from 'lucide-react';
import StreamControls from './StreamControls';
import StreamInfo from './StreamInfo';
import StreamEmbed from './StreamEmbed';
import StreamNavigation from './StreamNavigation';
import { streams } from '../../config/streams';

const StreamViewer = () => {
  const [currentStreamIndex, setCurrentStreamIndex] = useState(0);
  const currentStream = streams[currentStreamIndex];

  const nextStream = () => {
    setCurrentStreamIndex((prev) => (prev + 1) % streams.length);
  };

  const previousStream = () => {
    setCurrentStreamIndex((prev) => 
      prev === 0 ? streams.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-4 py-8">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-green-500/30">
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full z-10 border border-green-500/30">
            <MonitorPlay className="w-4 h-4 text-green-500" />
            <span className="text-sm font-mono text-green-500 animate-pulse">LIVE</span>
          </div>
          
          <StreamEmbed stream={currentStream} />

          {streams.length > 1 && (
            <StreamNavigation 
              onPrevious={previousStream}
              onNext={nextStream}
            />
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <StreamInfo stream={currentStream} />
          <StreamControls 
            streamCount={streams.length} 
            currentIndex={currentStreamIndex}
            streamId={currentStream.id}
          />
        </div>
      </div>
    </div>
  );
};

export default StreamViewer;