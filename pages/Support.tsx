import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { LifeBuoy, Bug, Clock, FileText, ArrowLeft } from 'lucide-react';

export const Support: React.FC = () => {
  const navigate = useNavigate();

  const commonIssues = [
    "Package Installation Failures (UPM)",
    "License Key Activation Errors",
    "Unity Version Compatibility (2021.3+)",
    "Render Pipeline Conflicts (URP/HDRP)",
    "Missing Namespace References"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-zinc-500 hover:text-white mb-8 transition-colors"
        >
            <ArrowLeft size={16} className="mr-2" /> Back Home
        </button>

        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Technical Support & Documentation</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Troubleshooting guides, documentation access, and direct support channels for all Creatush tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Common Issues Section */}
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full blur-2xl pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <FileText size={20} />
                    </div>
                    Common Issues
                </h2>
                
                <ul className="space-y-4">
                    {commonIssues.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-zinc-300">
                            <div className="w-2 h-2 mt-2.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)] shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Direct Support Section */}
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors">
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-tr-full blur-2xl pointer-events-none"></div>

                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                        <Bug size={20} />
                    </div>
                    Report a Bug
                </h2>
                
                <p className="text-zinc-400 mb-8 leading-relaxed">
                    Encountered an unexpected behavior or critical error? Please provide a detailed report including your Unity version, Render Pipeline (BiRP/URP/HDRP), and reproduction steps.
                </p>
                
                <div className="mt-auto">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800/50 inline-flex">
                        <Clock size={14} className="text-indigo-400" />
                        <span className="font-mono text-xs uppercase tracking-wide">Avg. Response: 24-48 Hours</span>
                    </div>
                    <Button onClick={() => navigate('/contact')} className="w-full bg-white text-black hover:bg-zinc-200">
                        Open Support Ticket
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};