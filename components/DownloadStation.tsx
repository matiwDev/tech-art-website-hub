import React, { useState } from 'react';
import { Github, Download, Copy, Check, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { Button } from './ui/Button';

interface DownloadStationProps {
  gitUrl?: string;
  downloadUrl?: string;
  isPro?: boolean;
  price?: string;
  purchaseUrl?: string;
}

export const DownloadStation: React.FC<DownloadStationProps> = ({ gitUrl, downloadUrl, isPro, price, purchaseUrl }) => {
  const [isUpmOpen, setIsUpmOpen] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
  };

  if (isPro) {
    return (
      <div className="mt-32 pb-10">
          <h3 className="text-2xl font-bold text-white mb-8 tracking-tight text-center font-sansation">GET PRO ACCESS</h3>
          
          <div className="max-w-xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 mb-6 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                  <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 font-sansation">Unlock the Full Toolkit</h4>
              <Button 
                  size="lg"
                  className="w-full mb-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border-0 font-sansation"
                  href={purchaseUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Get Pro Access – {price || "$25"}
              </Button>
              <p className="text-zinc-400 text-sm leading-relaxed">
                  Includes lifetime updates via Private GitHub Access & .unitypackage download via Polar.sh.
              </p>
          </div>
      </div>
    );
  }

  const hasGitUrl = gitUrl && gitUrl.trim() !== '' && gitUrl !== 'INSERT_GIT_URL_HERE';

  return (
    <div className="mt-32 pb-10">
        <h3 className="text-2xl font-bold text-white mb-8 tracking-tight text-center font-sansation">INSTALLATION</h3>
        
        <div className={`grid grid-cols-1 ${hasGitUrl ? 'md:grid-cols-2 max-w-4xl' : 'max-w-xl'} gap-8 mx-auto`}>
            {/* Option A: UPM */}
            {hasGitUrl && (
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <Github className="text-cyan-400" size={24} />
                        <h4 className="text-xl font-bold text-white">Option A: Unity Package Manager</h4>
                    </div>
                    <p className="text-zinc-400 text-sm mb-6 flex-grow">Install directly via Git URL for easy updates and version control.</p>
                    
                    <div className="flex items-center gap-2 mb-6">
                        <code className="flex-grow bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-cyan-300  overflow-x-auto whitespace-nowrap">
                            {gitUrl}
                        </code>
                        <Button variant="outline" className="shrink-0 px-3 py-3 h-auto" onClick={() => handleCopy(gitUrl)}>
                            {isCopied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-zinc-400" />}
                        </Button>
                    </div>

                    <div className="border-t border-zinc-800 pt-4">
                        <button 
                            onClick={() => setIsUpmOpen(!isUpmOpen)}
                            className="flex items-center justify-between w-full text-zinc-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            Show Instructions
                            {isUpmOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {isUpmOpen && (
                            <ol className="mt-4 space-y-2 text-sm text-zinc-400 list-decimal list-inside bg-black/20 p-4 rounded-lg">
                                <li>Open Unity &gt; Window &gt; Package Manager.</li>
                                <li>Click '+' &gt; 'Add package from git URL...'.</li>
                                <li>Paste the URL and click 'Add'.</li>
                            </ol>
                        )}
                    </div>
                </div>
            )}

            {/* Option B: Manual */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                    <Download className="text-cyan-400" size={24} />
                    <h4 className="text-xl font-bold text-white">{hasGitUrl ? 'Option B: Manual Download' : 'Manual Download'}</h4>
                </div>
                <p className="text-zinc-400 text-sm mb-6 flex-grow">Download the standalone .unitypackage for offline installation.</p>
                
                <Button 
                    className="w-full mb-6 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-semibold"
                    href={downloadUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Download size={18} className="mr-2" />
                    Download .unitypackage
                </Button>

                <div className="border-t border-zinc-800 pt-4 mt-auto">
                    <button 
                        onClick={() => setIsManualOpen(!isManualOpen)}
                        className="flex items-center justify-between w-full text-zinc-300 hover:text-white transition-colors text-sm font-medium"
                    >
                        Show Instructions
                        {isManualOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isManualOpen && (
                        <ol className="mt-4 space-y-2 text-sm text-zinc-400 list-decimal list-inside bg-black/20 p-4 rounded-lg">
                            <li>Download the file.</li>
                            <li>Double-click the file with Unity open.</li>
                            <li>Click 'Import'.</li>
                        </ol>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};
