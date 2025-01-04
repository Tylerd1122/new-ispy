import React, { useState, useEffect } from 'react';

const BiosBootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const bootSequence = [
    { text: 'iSpy', delay: 125 },
    { text: 'HHBIOS (C)2024 iSpy', delay: 125 },
    { text: '', delay: 125 },
    { text: 'HSP S13 2024 Special UC131S', delay: 125 },
    { text: '', delay: 125 },
    { text: 'Checking RAM : 14000 OK', delay: 125 },
    { text: '', delay: 125 },
    { text: 'LOADING RESOURCES (18/19)', delay: 125 },
    { text: '', delay: 125 },
    { text: 'Loaded neuralNet1          ... 63%', delay: 125 },
    { text: 'Loaded synapticLinks       ... 68%', delay: 125 },
    { text: 'Loaded quantumCore         ... 74%', delay: 125 },
    { text: 'Loaded aiEngine            ... 79%', delay: 125 },
    { text: 'Loaded deepLearning        ... 84%', delay: 125 },
    { text: 'Loaded blockchain          ... 89%', delay: 125 },
    { text: 'Loaded consensus           ... 95%', delay: 125 },
    { text: 'Loaded governance          ... 100%', delay: 125 },
    { text: '', delay: 125 },
    { text: 'All Content Loaded, launching iSpy V1.0', delay: 125 },
    { text: new Date().toLocaleDateString(), delay: 125 }
  ];

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentLine].text]);
        setCurrentLine(prev => prev + 1);
      }, bootSequence[currentLine].delay);

      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 125);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono p-8 z-30">
      {lines.map((line, index) => (
        <div key={index} className="mb-1">
          {line}
        </div>
      ))}
      <div className="animate-pulse">_</div>
    </div>
  );
};

export default BiosBootScreen;