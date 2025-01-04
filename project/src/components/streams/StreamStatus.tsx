import React from 'react';

interface StreamStatusProps {
  currentIndex: number;
  totalStreams: number;
}

export const StreamStatus = ({ currentIndex, totalStreams }: StreamStatusProps) => (
  <div className="mt-4 grid grid-cols-2 gap-2">
    <div className="font-mono text-sm">
      <span className="text-gray-500">Status: </span>
      <span className="text-green-500">Connected</span>
    </div>
    <div className="font-mono text-sm text-right">
      <span className="text-gray-500">Feed: </span>
      <span className="text-pink-500">{currentIndex + 1}/{totalStreams}</span>
    </div>
  </div>
);