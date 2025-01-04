import React from 'react';

interface IdCardProps {
  id: string;
}

const IdCard = ({ id }: IdCardProps) => (
  <div className="border border-green-500/30 rounded p-4 w-96 text-center bg-black/50 backdrop-blur-sm">
    <div className="text-green-500 font-mono text-sm">
      CA: {id}
    </div>
  </div>
);

export default IdCard;