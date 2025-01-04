import React, { useState } from 'react';

const StartPrompt = ({ onStart }: { onStart: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-20">
      <div className="bg-black p-4 rounded-lg">
        <button
          onClick={onStart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            border-2 border-green-500 px-12 py-6 text-2xl font-mono
            ${isHovered ? 'bg-green-500 text-black' : 'bg-transparent text-green-500'}
            transition-all duration-300 hover:scale-105
            shadow-[0_0_15px_rgba(34,197,94,0.5)]
          `}
        >
          Initialize iSpy
        </button>
      </div>
      <div className="mt-6 bg-black border-2 border-green-500 rounded p-4 w-[28rem] text-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
        <div className="text-green-500 font-mono text-sm">CA: XXXXXXXXXXXXXXXXXXXXXXXX</div>
      </div>
    </div>
  );
};

export default StartPrompt;