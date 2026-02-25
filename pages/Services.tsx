import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Cpu, Wand2, PenTool, Search, Sparkles, Zap, Layers, GitBranch, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const pricingModels = [
    {
      name: "The Sprint",
      price: "$100/hr",
      description: "Perfect for rapid troubleshooting, quick shader adjustments, or technical advisory sessions.",
      features: [
        "Code Reviews",
        "Shader Debugging",
        "Ad-hoc Consultation",
        "Quick Turnaround",
      ]
    },
    {
      name: "The Momentum",
      price: "$550/day",
      description: "A dedicated 7-hour block focused on feature implementation, optimization passes, or pipeline building.",
      isPopular: true,
      features: [
        "Feature Implementation",
        "Performance Profiling",
        "Pipeline Tooling",
        "VFX Systems Design",
        "Detailed Documentation"
      ]
    },
    {
      name: "The Visionary",
      price: "Custom",
      description: "Tailored arrangements for large-scale projects, long-term studio support, or complex architectural builds.",
      features: [
        "Custom Tools development",
        "Architecture Design",
        "Team Leadership",
        "Long-term Support",
        "Custom Retainers"
      ]
    }
  ];

  const capabilities = [
    { icon: Wand2, title: "AI Automation", desc: "Generative workflows & tooling." },
    { icon: Zap, title: "Performance Optimization", desc: "Frame-rate & memory analysis." },
    { icon: Terminal, title: "Custom Editor Tools", desc: "Unity/Unreal extensions." },
    { icon: Search, title: "Project Audits", desc: "Deep-dive technical reviews." },
    { icon: Sparkles, title: "Shader Development", desc: "HLSL/GLSL/Shader Graph." },
    { icon: Layers, title: "VFX Systems", desc: "Particles & fluid simulations." },
    { icon: GitBranch, title: "Pipeline Architecture", desc: "Asset management & CI/CD." },
    { icon: Cpu, title: "Tech Art Magic", desc: "Bridge between art & code. Creative Solutions" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
       <div className="max-w-7xl mx-auto">
         {/* Header */}
         <div className="text-center mb-20">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Strategic Tech Art Services</h1>
           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             Let’s make your project lighter, smarter, and smoother.
           </p>
         </div>

         {/* Pricing Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-32">
           {pricingModels.map((tier, idx) => (
             <div 
              key={idx}
              className={`relative p-8 rounded-3xl border transition-all duration-300 h-full flex flex-col backdrop-blur-xl ${
                tier.isPopular 
                  ? 'bg-zinc-900/80 border-indigo-500/50 shadow-2xl shadow-indigo-500/10 scale-105 z-10' 
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
              }`}
             >
               {tier.isPopular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 rounded-full text-xs font-bold font-mono text-white tracking-wide shadow-lg shadow-indigo-500/50">
                   MOST POPULAR
                 </div>
               )}
               
               <h3 className="text-xl font-medium text-white mb-2">{tier.name}</h3>
               <div className="text-4xl font-bold text-white mb-4 font-mono">{tier.price}</div>
               <p className="text-zinc-400 text-sm mb-8 min-h-[40px]">{tier.description}</p>

               <ul className="space-y-4 mt-auto">
                 {tier.features.map((feature, fIdx) => (
                   <li key={fIdx} className="flex items-center text-zinc-300 text-sm">
                     <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center mr-3 text-indigo-400 shrink-0">
                       <Check size={12} strokeWidth={3} />
                     </div>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>

         {/* Capabilities Grid */}
         <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((cap, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                            <cap.icon size={20} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">{cap.title}</h3>
                        <p className="text-zinc-500 text-sm">{cap.desc}</p>
                    </div>
                ))}
            </div>
         </div>

         {/* Main CTA */}
         <div className="flex flex-col items-center justify-center border-t border-zinc-900 pt-16 text-center">
            <span className="text-indigo-400 font-medium tracking-wider text-sm uppercase mb-4 block font-mono">Let's build something extraordinary</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready for the next level?</h2>
            <Button 
                variant="primary" 
                size="lg" 
                className="px-12 py-6 text-lg bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all"
                onClick={() => navigate('/contact')}
            >
                Contact Me
            </Button>
         </div>
       </div>
    </div>
  );
};