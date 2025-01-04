import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StreamNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const StreamNavigation = ({ onPrevious, onNext }: StreamNavigationProps) => (
  <>
    <button 
      onClick={onPrevious}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full text-green-500 border border-green-500/30"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button 
      onClick={onNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full text-green-500 border border-green-500/30"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </>
);

export default StreamNavigation;