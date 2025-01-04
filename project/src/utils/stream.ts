import type { Stream } from '../config/streams';

export const constructEmbedUrl = (stream: Stream): string => {
  if (stream.type === 'youtube') {
    const videoId = stream.url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return stream.embedUrl || stream.url;
};