import React from 'react';
import { Heart, Coffee, Users, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

interface SupportCardProps {
  isPro?: boolean;
}

export const SupportCard: React.FC<SupportCardProps> = ({ isPro }) => {
  const title = isPro ? "Fuel the R&D" : "Support the Lab";
  const description = isPro 
    ? "Creatush is an independent lab dedicated to open technical art. If these pro tools accelerate your pipeline, consider fueling our next R&D experiment."
    : "Creatush is an independent lab dedicated to open technical art. If these tools save you time, consider fueling the next experiment.";

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 text-center relative z-10 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
        <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-cyan-800/50 mx-auto mb-6 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <Heart className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-zinc-400 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="outline" 
            className="border-zinc-700 hover:bg-zinc-800 hover:border-[#29abe0]/50 text-white transition-all"
            href="https://ko-fi.com/creatush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Coffee className="w-5 h-5 mr-2 text-[#29abe0]" />
            Ko-fi
          </Button>
          <Button 
            variant="outline" 
            className="border-zinc-700 hover:bg-zinc-800 hover:border-blue-500/50 text-white transition-all"
            href="https://paypal.me/creatush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5 mr-2 text-blue-400" />
            PayPal
          </Button>
        </div>
      </div>
    </section>
  );
};
