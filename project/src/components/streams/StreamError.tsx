import React from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';

interface StreamErrorProps {
  onRetry: () => void;
}

const StreamError = ({ onRetry }: StreamErrorProps) => (
  <div className="w-full h-full flex items-center justify-center bg-gray-900/90 backdrop-blur">
    <div className="text-center p-8 rounded-lg bg-black/50 border border-red-500/20">
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Stream Connection Error</h3>
      <p className="text-gray-400 mb-6">Unable to establish connection to the stream</p>
      <button 
        onClick={onRetry} 
        className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
      >
        <RefreshCcw className="w-4 h-4" />
        Retry Connection
      </button>
    </div>
  </div>
);

export default StreamError;