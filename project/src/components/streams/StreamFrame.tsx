import React from 'react';
import type { Stream } from '../../config/streams';
import { constructEmbedUrl } from '../../utils/stream';
import SkylineStream from './SkylineStream';
import ImageStream from './ImageStream';

interface StreamFrameProps {
  stream: Stream;
  onError?: () => void;
}

const StreamFrame = ({ stream, onError }: StreamFrameProps) => {
  if (stream.type === 'hls') {
    return <SkylineStream stream={stream} />;
  }

  if (stream.type === 'image') {
    return <ImageStream stream={stream} />;
  }

  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        src={constructEmbedUrl(stream)}
        title={stream.title}
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onError={onError}
      />
    </div>
  );
};

export default StreamFrame;