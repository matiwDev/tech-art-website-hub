import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div 
            key={index} 
            className="group relative p-6 rounded-2xl border bg-zinc-900/40 backdrop-blur-xl border-zinc-800 transition-all duration-300 flex flex-col h-full overflow-hidden hover:border-purple-500/50 hover:bg-zinc-900/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10"
          >
            {/* Scanning Light Sweep Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none skew-x-12 z-0" />
            
            <div className="relative z-10 w-12 h-12 rounded-xl bg-zinc-950/50 border border-zinc-800 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:border-purple-500/30">
              <Icon className="text-zinc-400 group-hover:text-purple-400 transition-colors" size={24} />
            </div>
            
            <h3 className="relative z-10 text-xl font-bold text-white group-hover:text-purple-100 transition-colors mb-3">
              {feature.title}
            </h3>
            
            <p className="relative z-10 text-zinc-400 text-sm leading-relaxed flex-grow">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
