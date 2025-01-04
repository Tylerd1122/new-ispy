import React, { useState } from 'react';
import StartPrompt from './StartPrompt';
import MatrixRain from './MatrixRain';
import BiosBootScreen from './BiosBootScreen';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<'matrix' | 'bios'>('matrix');

  const handleStartClick = () => {
    setStage('bios');
  };

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        {stage === 'matrix' && <StartPrompt onStart={handleStartClick} />}
        {stage === 'bios' && <BiosBootScreen onComplete={onComplete} />}
      </div>
    </div>
  );
};

export default LoadingScreen;