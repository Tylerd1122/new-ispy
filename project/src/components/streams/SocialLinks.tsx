import React from 'react';
import { Twitter, Rocket } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-green-900/30">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
      >
        <Twitter className="w-5 h-5" />
        <span className="text-sm font-mono">Twitter</span>
      </a>
      <a
        href="https://pump.fun"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
      >
        <Rocket className="w-5 h-5" />
        <span className="text-sm font-mono">PumpFun</span>
      </a>
    </div>
  );
};

export default SocialLinks;