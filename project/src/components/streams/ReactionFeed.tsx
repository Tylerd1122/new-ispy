import React from 'react';

interface ReactionFeedProps {
  messages: { emoji: string; timestamp: number }[];
}

const ReactionFeed = ({ messages }: ReactionFeedProps) => (
  <div className="absolute bottom-full mb-2 w-64 h-48 bg-black/90 backdrop-blur border border-green-500/30 rounded-lg p-4 overflow-hidden">
    <div className="h-full overflow-y-auto space-y-2 scrollbar-thin scrollbar-track-black scrollbar-thumb-green-500/30">
      {messages.map((msg, i) => (
        <div
          key={msg.timestamp + i}
          className="flex items-center gap-2 text-sm text-green-400/80 font-mono"
        >
          <span>{msg.emoji}</span>
          <span className="text-xs text-green-500/60">
            {new Date(msg.timestamp).toLocaleTimeString()}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ReactionFeed;