import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Terms: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-zinc-500 hover:text-white mb-8 transition-colors"
        >
            <ArrowLeft size={16} className="mr-2" /> Back Home
        </button>

        <div className="flex items-center gap-3 mb-6">
            <Scale className="text-purple-500" size={32} />
            <h1 className="text-4xl font-bold text-white">Terms of Use</h1>
        </div>
        
        <div className="space-y-8 text-zinc-300 leading-relaxed animate-fade-in-up">
            <div className="p-8 md:p-10 bg-zinc-900/40 border border-zinc-800 rounded-3xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/5 to-pink-500/5 rounded-bl-full pointer-events-none"></div>

                <h2 className="text-xl font-bold text-white mb-4">1. Professional Usage</h2>
                <p className="mb-6 text-zinc-400">
                    The tools, scripts, and content provided on Creatush are intended for professional use in software development and digital art creation. By downloading or integrating our tools, you agree to use them in accordance with standard software best practices.
                </p>

                <hr className="border-zinc-800 my-8" />

                <h2 className="text-xl font-bold text-white mb-4">2. Intellectual Property</h2>
                <p className="mb-6 text-zinc-400">
                    All original code, shaders, visual assets, and media showcased on this website are the intellectual property of Creatush, unless otherwise stated.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-zinc-400">
                    <li>Tools purchased via the Unity Asset Store or other marketplaces are subject to their respective End User License Agreements (EULA).</li>
                    <li>Code snippets provided in the blog/lab section are open for educational and personal use, but may not be repackaged or sold as standalone products without permission.</li>
                </ul>

                <hr className="border-zinc-800 my-8" />

                <h2 className="text-xl font-bold text-white mb-4">3. Limitation of Liability</h2>
                <p className="text-zinc-400 mb-6">
                    Creatush tools and code samples are provided "as is" without warranty of any kind, express or implied.
                </p>
                <p className="text-zinc-400">
                    In no event shall Creatush be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software. Please ensure you back up your projects before implementing new tools or assets.
                </p>
            </div>
            
            <div className="text-xs text-zinc-600 font-mono text-center">
                Last Updated: February 2026
            </div>
        </div>
      </div>
    </div>
  );
};