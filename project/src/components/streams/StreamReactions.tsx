import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useStreamReactions } from '../../hooks/useStreamReactions';
import ReactionButton from './ReactionButton';
import ReactionFeed from './ReactionFeed';

interface StreamReactionsProps {
  streamId: string;
}

const StreamReactions = ({ streamId }: StreamReactionsProps) => {
  const { reactions, addReaction } = useStreamReactions(streamId);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<{ emoji: string; timestamp: number }[]>([]);

  const handleReaction = async (emoji: string) => {
    await addReaction(emoji);
    setMessages(prev => [
      { emoji, timestamp: Date.now() },
      ...prev.slice(0, 49), // Keep last 50 messages
    ]);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-2">
        {reactions.map(reaction => (
          <ReactionButton
            key={reaction.emoji}
            reaction={reaction}
            onReact={handleReaction}
          />
        ))}
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-gray-800/50 hover:bg-gray-700/50 rounded-full p-2 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {showChat && <ReactionFeed messages={messages} />}
    </div>
  );
};

export default StreamReactions;