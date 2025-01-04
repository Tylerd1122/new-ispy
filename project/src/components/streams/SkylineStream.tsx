import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import type { Stream } from '../../config/streams';
import StreamError from './StreamError';

interface SkylineStreamProps {
  stream: Stream;
}

const SkylineStream = ({ stream }: SkylineStreamProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);

  const initializeStream = () => {
    const video = videoRef.current;
    if (!video || !stream.embedUrl) return;

    setError(false);

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90
      });

      hls.loadSource(stream.embedUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true; // Ensure muted for autoplay
        video.play().catch(() => {
          console.log('Stream ready - click to play');
        });
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          setError(true);
          hls.destroy();
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = stream.embedUrl;
      video.muted = true;
      video.play().catch(() => {
        console.log('Stream ready - click to play');
      });
    }
  };

  useEffect(() => {
    const cleanup = initializeStream();
    return () => cleanup?.();
  }, [stream.embedUrl]);

  if (error) {
    return <StreamError onRetry={initializeStream} />;
  }

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        autoPlay
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
      />
    </div>
  );
};

export default SkylineStream;