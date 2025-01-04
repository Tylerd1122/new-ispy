import React from 'react';
import { TrendingUp, ArrowUpRight, DollarSign } from 'lucide-react';

const PriceTracker = () => {
  return (
    <div className="bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <DollarSign className="w-8 h-8 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Live Price</h3>
        </div>
        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm flex items-center gap-1">
          <ArrowUpRight className="w-4 h-4" /> +12.34%
        </span>
      </div>

      <div className="text-4xl font-bold text-white mb-4">
        $0.0000234
        <span className="text-sm text-gray-400 ml-2">USD</span>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-400">
        <div>
          <p>24h Volume</p>
          <p className="text-white font-semibold">$1,234,567</p>
        </div>
        <div>
          <p>Market Cap</p>
          <p className="text-white font-semibold">$45,678,901</p>
        </div>
        <div>
          <p>Holders</p>
          <p className="text-white font-semibold">12,345</p>
        </div>
      </div>

      {/* Animated chart placeholder */}
      <div className="mt-6 h-32 relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20"></div>
        <TrendingUp className="w-full h-full text-purple-500/40 stroke-[1]" />
      </div>
    </div>
  );
};

export default PriceTracker;