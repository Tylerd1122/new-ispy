import React from 'react';
import { Milestone, Network } from 'lucide-react';

const RoadmapItem = ({ phase, title, description, completed }) => (
  <div className="relative flex items-start gap-6">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
      completed ? 'border-purple-500 bg-purple-500/20' : 'border-gray-700 bg-gray-800/50'
    }`}>
      <Network className={`w-6 h-6 ${completed ? 'text-purple-400' : 'text-gray-500'}`} />
    </div>
    <div className="flex-1">
      <span className={`text-sm font-semibold ${completed ? 'text-purple-400' : 'text-gray-500'}`}>
        {phase}
      </span>
      <h3 className="text-xl font-bold text-white mt-1 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const Roadmap = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Neural Network Roadmap
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-driven development pathway to revolutionize decentralized finance
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <RoadmapItem
            phase="Phase 1 - Completed"
            title="Neural Network Integration"
            description="Launch of core smart contracts and AI-powered trading algorithms"
            completed={true}
          />
          <RoadmapItem
            phase="Phase 2 - In Progress"
            title="Quantum Marketplace"
            description="Implementation of NFT marketplace with AI-generated assets"
            completed={true}
          />
          <RoadmapItem
            phase="Phase 3 - Upcoming"
            title="Synthetic Intelligence Protocol"
            description="Launch of decentralized AI training platform and governance system"
            completed={false}
          />
          <RoadmapItem
            phase="Phase 4 - Future"
            title="Metaverse Integration"
            description="Full integration with virtual worlds and AI-powered avatars"
            completed={false}
          />
        </div>

        {/* Neural network visualization */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#3b0764,transparent)] opacity-30"></div>
      </div>
    </section>
  );
};

export default Roadmap;