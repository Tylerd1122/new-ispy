import React from 'react';
import type { Reaction } from '../../hooks/useStreamReactions';

interface ReactionButtonProps {
  reaction: Reaction;
  onReact: (emoji: string) => void;
}

const ReactionButton = ({ reaction, onReact }: ReactionButtonProps) => (
  <button
    onClick={() => onReact(reaction.emoji)}
    className="group relative bg-black/50 hover:bg-green-900/30 rounded-full p-2 transition-colors border border-green-500/30"
  >
    <span className="text-xl">{reaction.emoji}</span>
    {reaction.count > 0 && (
      <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center font-mono">
        {reaction.count}
      </span>
    )}
  </button>
);

export default ReactionButton;