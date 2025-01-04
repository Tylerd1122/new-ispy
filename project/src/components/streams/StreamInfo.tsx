import React from 'react';
import { Info, MapPin } from 'lucide-react';
import type { Stream } from '../../config/streams';
import ViewerCount from './ViewerCount';
import SignalStrength from './SignalStrength';
import ReportButton from './ReportButton';

interface StreamInfoProps {
  stream: Stream;
}

const StreamInfo = ({ stream }: StreamInfoProps) => {
  return (
    <div className="bg-black/50 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <Info className="w-4 h-4 text-green-500" />
        <h3 className="text-lg font-mono text-green-500">{stream.title}</h3>
      </div>
      <p className="text-green-400/80 font-mono text-sm">{stream.description}</p>
      {stream.location && (
        <div className="mt-2 flex items-center gap-2 text-green-400">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-mono">{stream.location}</span>
        </div>
      )}
      <ViewerCount streamId={stream.id} />
      <div className="mt-4">
        <SignalStrength />
      </div>
      <ReportButton />
    </div>
  );
};

export default StreamInfo;