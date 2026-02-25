import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Privacy: React.FC = () => {
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
            <ShieldCheck className="text-indigo-500" size={32} />
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
        
        <div className="space-y-8 text-zinc-300 leading-relaxed animate-fade-in-up">
            <div className="p-8 md:p-10 bg-zinc-900/40 border border-zinc-800 rounded-3xl backdrop-blur-sm relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-bl-full pointer-events-none"></div>

                <h2 className="text-xl font-bold text-white mb-4">Data Minimalism</h2>
                <p className="mb-6 text-zinc-400">
                    At Creatush, we prioritize data minimalism. We believe developer tools should be tools, not tracking devices.
                </p>
                
                <hr className="border-zinc-800 my-8" />

                <h2 className="text-xl font-bold text-white mb-4">Tool Usage Data</h2>
                <p className="mb-6 text-zinc-400">
                    <strong>Creatush does not collect personal data from our tools.</strong> When you install or use our Unity packages, SDKs, or Editor Extensions, no telemetry data, usage statistics, source code analysis, or personal identifiers are sent to our servers. Your project data remains entirely on your local machine.
                </p>

                <hr className="border-zinc-800 my-8" />
                
                <h2 className="text-xl font-bold text-white mb-4">Community Features & Comments</h2>
                <p className="mb-6 text-zinc-400">
                    Our blog and community sections use <strong>Giscus</strong>, a comment system powered by GitHub Discussions. 
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-zinc-400">
                    <li>When you post a comment, you authenticate directly with GitHub.</li>
                    <li>Creatush does not store your password, authentication tokens, or personal identifiers.</li>
                    <li>Your comments, username, and avatar are stored and retrieved via the GitHub API.</li>
                    <li>Please refer to the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">GitHub Privacy Statement</a> for details on how they handle your data.</li>
                </ul>

                <hr className="border-zinc-800 my-8" />

                <h2 className="text-xl font-bold text-white mb-4">Website & Data Transparency</h2>
                <p className="mb-6 text-zinc-400">
                    <strong>We do not track, sell, or trade personal visitor data.</strong>
                </p>
                <p className="text-zinc-400">
                    For website inquiries, we only store email addresses provided voluntarily via the contact form for the sole purpose of communication. We respect your digital privacy.
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