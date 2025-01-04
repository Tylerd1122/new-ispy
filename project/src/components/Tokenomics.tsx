import React from 'react';
import { PieChart, Zap, Shield, Rocket } from 'lucide-react';

const TokenomicsCard = ({ title, percentage, icon: Icon, color }) => (
  <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    <Icon className={`w-12 h-12 ${color} mb-4`} />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className={`text-3xl font-bold ${color}`}>{percentage}%</p>
  </div>
);

const Tokenomics = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Tokenomics
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powered by advanced AI algorithms, our token distribution ensures fairness and sustainable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TokenomicsCard
            title="Liquidity Pool"
            percentage={40}
            icon={PieChart}
            color="text-purple-400"
          />
          <TokenomicsCard
            title="Development"
            percentage={25}
            icon={Zap}
            color="text-pink-400"
          />
          <TokenomicsCard
            title="Community"
            percentage={20}
            icon={Shield}
            color="text-blue-400"
          />
          <TokenomicsCard
            title="Marketing"
            percentage={15}
            icon={Rocket}
            color="text-cyan-400"
          />
        </div>

        {/* Neural network background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3b0764,transparent)] opacity-50"></div>
      </div>
    </section>
  );
};

export default Tokenomics;