import React from 'react';
import GlitchText from './ui/GlitchText';
import TerminalText from './ui/TerminalText';
import IdCards from './ui/IdCards';
import { Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center">
        {/* ID Cards */}
        <IdCards />

        {/* Main display */}
        <div className="w-full max-w-2xl mx-auto mt-12">
          <div className="relative border border-pink-500/30 rounded-lg p-6 bg-black/50 backdrop-blur">
            {/* ASCII art area */}
            <div className="mb-8 aspect-video flex items-center justify-center border border-pink-500/20 rounded overflow-hidden">
              <Brain className="w-32 h-32 text-pink-500 animate-pulse" />
            </div>

            {/* Terminal info */}
            <div className="space-y-2 font-mono">
              <TerminalText label="VESSEL" value="NEURO Intelligence Core" />
              <TerminalText label="PURPOSE" value="[REDACTED]" />
              <TerminalText label="ORIGIN" value="Digital Consciousness" />
              <TerminalText label="STATE" value="Active Monitoring" />
              <TerminalText label="DISTANCE FROM REALITY" value="[CALCULATING]" />
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-6 py-2 border border-pink-500 text-pink-500 hover:bg-pink-500/10 transition-colors rounded">
                INITIALIZE
              </button>
              <button className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors rounded">
                CONNECT
              </button>
              <button className="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-colors rounded">
                ANALYZE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Hero;