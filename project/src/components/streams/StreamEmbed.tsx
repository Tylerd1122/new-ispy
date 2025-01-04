import React from 'react';
import type { Stream } from '../../config/streams';
import StreamFrame from './StreamFrame';

const StreamEmbed = ({ stream }: { stream: Stream }) => {
  return (
    <div className="w-full h-full">
      <StreamFrame stream={stream} />
    </div>
  );
};

export default StreamEmbed;