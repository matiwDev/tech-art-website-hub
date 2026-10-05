import React, { useState } from 'react';
import { Github, Download, Copy, Check, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { Button } from './ui/Button';

interface DownloadStationProps {
  toolName: string;
  gitUrl?: string;
  downloadUrl?: string;
  isPro?: boolean;
  price?: string;
  purchaseUrl?: string;
  onRequestAccess: () => void;
}

export const DownloadStation: React.FC<DownloadStationProps> = ({ toolName, gitUrl, downloadUrl, isPro, price, purchaseUrl, onRequestAccess }) => {
  const [isUpmOpen, setIsUpmOpen] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);

  const hasGit = Boolean(gitUrl && gitUrl.trim() !== "" && gitUrl !== 'INSERT_GIT_URL_HERE');
  const hasDownload = Boolean(downloadUrl && downloadUrl.trim() !== "" && downloadUrl !== 'INSERT_DOWNLOAD_URL_HERE');

  if (!hasGit && !hasDownload) return null;

  return (
    <div className="mt-32 pb-10">
        <h3 className="text-2xl font-bold text-white mb-8 tracking-tight text-center font-sansation uppercase">Request Access</h3>
        
        <div className={`grid grid-cols-1 ${hasGit && hasDownload ? 'md:grid-cols-2 max-w-4xl' : 'max-w-xl'} gap-8 mx-auto`}>
            {/* Option A: Git Access */}
            {hasGit && (
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-cyan-400 mb-6">
                        <Github size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Git Repository</h4>
                    <p className="text-zinc-400 text-sm mb-8 flex-grow">Request permission to access the private GitHub repository for source code and contributions.</p>
                    
                    <Button 
                        onClick={onRequestAccess}
                        className="w-full py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-xl shadow-lg shadow-white/5 transition-all"
                    >
                        Request Git Access
                    </Button>
                </div>
            )}

            {/* Option B: Direct Download */}
            {hasDownload && (
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-cyan-400 mb-6">
                      <Download size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Package Download</h4>
                  <p className="text-zinc-400 text-sm mb-8 flex-grow">Request access to download the compiled .unitypackage for direct installation.</p>
                  
                  <Button 
                      onClick={onRequestAccess}
                      className="w-full py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-xl shadow-lg shadow-white/5 transition-all"
                  >
                      Request Files Access
                  </Button>
              </div>
            )}
        </div>
    </div>
  );
};

