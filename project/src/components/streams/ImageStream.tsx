import React, { useState, useEffect } from 'react';
import type { Stream } from '../../config/streams';

interface ImageStreamProps {
  stream: Stream;
}

const ImageStream = ({ stream }: ImageStreamProps) => {
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    if (!stream.refreshRate) return;

    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, stream.refreshRate);

    return () => clearInterval(interval);
  }, [stream.refreshRate]);

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <img
        src={`${stream.url}?t=${timestamp}`}
        alt={stream.title}
        className="max-h-full w-auto object-contain"
        style={{ maxHeight: '235px' }}
      />
    </div>
  );
};

export default ImageStream;