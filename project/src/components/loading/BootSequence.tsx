import React, { useState, useEffect } from 'react';

const BootSequence = () => {
  const [currentLine, setCurrentLine] = useState(0);

  const bootLines = [
    'HHBIOS (C)2024 Neuro',
    'HSP S13 2024 Special UC131S',
    'Checking RAM : 14000 OK',
    'FINISHED LOADING RESOURCES',
    'Loaded neuralNet1          ... 63%',
    'Loaded synapticLinks       ... 68%',
    'Loaded quantumCore         ... 74%',
    'Loaded aiEngine            ... 79%',
    'Loaded deepLearning        ... 84%',
    'Loaded blockchain          ... 89%',
    'Loaded consensus           ... 95%',
    'Loaded governance          ... 100%',
    'All Content Loaded, launching Neuro V1.0'
  ];

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="p-8 font-mono text-sm">
      {bootLines.slice(0, currentLine).map((line, index) => (
        <div key={index} className="mb-1">
          <span className="mr-2">&gt;</span>
          {line}
        </div>
      ))}
    </div>
  );
};

export default BootSequence;