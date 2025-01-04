import React from 'react';

interface TerminalTextProps {
  label: string;
  value: string;
  className?: string;
}

const TerminalText = ({ label, value, className = '' }: TerminalTextProps) => {
  return (
    <div className={`font-mono text-sm ${className}`}>
      <span className="text-pink-500">{label}: </span>
      <span className="text-gray-300">{value}</span>
    </div>
  );
};

export default TerminalText;