export interface Stream {
  id: string;
  title: string;
  url: string;
  description: string;
  location?: string;
  type: 'youtube' | 'hls' | 'image';
  embedUrl?: string;
  refreshRate?: number;
}

export const streams: Stream[] = [
  {
    id: 'i278-lee-ave',
    title: 'I-278 at Lee Avenue',
    url: 'https://s52.nysdot.skyvdn.com:443/rtplive/R11_077/playlist.m3u8',
    embedUrl: 'https://s52.nysdot.skyvdn.com:443/rtplive/R11_077/playlist.m3u8',
    description: 'Live traffic camera monitoring I-278 at Lee Avenue',
    location: 'Kings | New York City Area | New York',
    type: 'hls'
  },
  {
    id: 'thruway-204',
    title: 'VT Rest Stop Camera',
    url: 'https://s58.nysdot.skyvdn.com:443/rtplive/TA_204/playlist.m3u8',
    embedUrl: 'https://s58.nysdot.skyvdn.com:443/rtplive/TA_204/playlist.m3u8',
    description: 'Live traffic camera feed from Vermont Rest Stop',
    location: 'Vermont, USA',
    type: 'hls'
  },
  {
    id: 'boston-seaport',
    title: 'Boston Seaport District',
    url: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_291/playlist.m3u8',
    embedUrl: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_291/playlist.m3u8',
    description: 'Live traffic camera from Boston Seaport District',
    location: 'Boston, Massachusetts, USA',
    type: 'hls'
  },
  {
    id: 'river-st',
    title: 'River Street Camera',
    url: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_263/playlist.m3u8',
    embedUrl: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_263/playlist.m3u8',
    description: 'Live traffic camera monitoring River Street',
    location: 'New York, USA',
    type: 'hls'
  },
  {
    id: 'pa-interstate',
    title: 'Pennsylvania Interstate',
    url: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_294/playlist.m3u8',
    embedUrl: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_294/playlist.m3u8',
    description: 'Live traffic camera monitoring Pennsylvania Interstate',
    location: 'Pennsylvania, USA',
    type: 'hls'
  },
  {
    id: 'detroit-downtown',
    title: 'Detroit Downtown',
    url: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_273/playlist.m3u8',
    embedUrl: 'https://s7.nysdot.skyvdn.com:443/rtplive/R4_273/playlist.m3u8',
    description: 'Live traffic camera monitoring downtown Detroit',
    location: 'Detroit, Michigan, USA',
    type: 'hls'
  },
  {
    id: 'thruway-103',
    title: 'NY Thruway Camera 103',
    url: 'https://s58.nysdot.skyvdn.com:443/rtplive/TA_103/playlist.m3u8',
    embedUrl: 'https://s58.nysdot.skyvdn.com:443/rtplive/TA_103/playlist.m3u8',
    description: 'Live traffic camera feed from NY Thruway',
    location: 'New York, USA',
    type: 'hls'
  },
  {
    id: 'i495-ramp-queens',
    title: 'I-495 Ramp Queens',
    url: 'https://s52.nysdot.skyvdn.com:443/rtplive/R11_132/playlist.m3u8',
    embedUrl: 'https://s52.nysdot.skyvdn.com:443/rtplive/R11_132/playlist.m3u8',
    description: 'Live traffic camera monitoring I-495 Ramp',
    location: 'Queens | New York City Area | New York',
    type: 'hls'
  },
  {
    id: 'i87-bronx',
    title: 'I-87 Bronx',
    url: 'https://s52.nysdot.skyvdn.com:443/rtplive/R11_047/playlist.m3u8',
    embedUrl: 'https://s52.nysdot.skyvdn.com:443/rtplive/R11_047/playlist.m3u8',
    description: 'Live traffic camera monitoring I-87',
    location: 'Bronx | New York City Area | New York',
    type: 'hls'
  },
  {
    id: 'ny895-bronx',
    title: 'NY895 Bronx',
    url: 'https://s53.nysdot.skyvdn.com:443/rtplive/R11_054/playlist.m3u8',
    embedUrl: 'https://s53.nysdot.skyvdn.com:443/rtplive/R11_054/playlist.m3u8',
    description: 'Live traffic camera monitoring NY895',
    location: 'Bronx | New York City Area | New York',
    type: 'hls'
  }
];