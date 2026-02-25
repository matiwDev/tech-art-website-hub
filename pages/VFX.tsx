import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Box, WifiOff } from 'lucide-react';
import { vfxData, VFXProject } from '../data/vfxData';

// --- Utility Functions ---
const isVideo = (url: string) => {
  return /\.(mp4|webm|mov)($|\?)/i.test(url);
};

// --- Placeholder Component ---
const MediaPlaceholder: React.FC<{ text: string }> = ({ text }) => (
  <div className="absolute inset-0 bg-black flex items-center justify-center z-0 overflow-hidden">
     {/* Scanline Texture */}
     <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(rgba(18, 16, 23, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))`,
            backgroundSize: "100% 2px, 3px 100%"
        }}
     />
     
     {/* Text Content */}
     <div className="relative z-10 flex flex-col items-center gap-2">
         <span className="font-mono text-[10px] text-purple-500/50 animate-pulse tracking-[0.2em] uppercase">
           {text}
         </span>
     </div>
  </div>
);

// --- Media Card Component ---
const VFXCard: React.FC<{ project: VFXProject }> = ({ project }) => {
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
    
    const handleLoad = () => {
        // Short delay to prevent flicker on cached items, ensures smooth fade
        requestAnimationFrame(() => setStatus('loaded'));
    };

    const handleError = () => {
        setStatus('error');
    };

    const isVid = isVideo(project.mediaUrl);

    return (
        <div 
            className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 animate-fade-in-up hover:border-purple-500/50 transition-colors duration-300 h-full w-full ${
                project.size === 'large' ? 'md:row-span-2' : 
                project.size === 'medium' ? 'md:col-span-1' : ''
            }`}
        >
            {/* 1. Placeholder Layer (Visible during loading or error) */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${status === 'loaded' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <MediaPlaceholder text={status === 'error' ? 'Creatush / Offline' : 'Creatush / Loading...'} />
            </div>

            {/* 2. Media Layer (Fades in on load) */}
            {status !== 'error' && (
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}>
                    {isVid ? (
                        <video
                            src={project.mediaUrl}
                            poster={project.poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onCanPlay={handleLoad}
                            onError={handleError}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                        />
                    ) : (
                        <img 
                            src={project.mediaUrl} 
                            alt={project.title} 
                            onLoad={handleLoad}
                            onError={handleError}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                        />
                    )}
                </div>
            )}

            {/* 3. Scanning Light Sweep Animation (Only shows when loaded/valid) */}
            {status !== 'error' && (
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none skew-x-12 z-20" />
            )}
            
            {/* 4. Content Overlay (Hover Effect) - Disabled on Error */}
            {status !== 'error' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-30">
                    <span className="text-indigo-400 text-xs font-mono mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        {project.category === 'Shaders' ? <Box size={12} /> : <Sparkles size={12} />}
                        {project.category.toUpperCase()}
                    </span>
                    <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                </div>
            )}

            {/* 5. Error Icon Overlay */}
            {status === 'error' && (
                <div className="absolute bottom-6 right-6 z-30">
                    <WifiOff className="text-zinc-700 w-6 h-6" />
                </div>
            )}
        </div>
    );
};

export const VFX: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? vfxData 
    : vfxData.filter(p => p.category === filter);

  const filters = ['All', 'Shaders', 'VFXs'];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">VFX & Shaders</h1>
            <p className="text-zinc-400 max-w-xl">
              A curated collection of real-time rendering experiments.
              Exploring the intersection of math, physics, and art.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-sm">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-2 rounded-full text-sm font-medium font-mono transition-all duration-300 ${
                            filter === f 
                            ? 'bg-zinc-800 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)] border border-indigo-500/30' 
                            : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>

        {/* Technical Grid Container with Brackets */}
        <div className="relative p-4 md:p-8 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm">
            {/* Technical Brackets */}
            <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-zinc-600 rounded-tl-lg pointer-events-none"></div>
            <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-zinc-600 rounded-tr-lg pointer-events-none"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-zinc-600 rounded-bl-lg pointer-events-none"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-zinc-600 rounded-br-lg pointer-events-none"></div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] relative z-10">
                {filteredProjects.map((project) => (
                    <VFXCard key={project.id} project={project} />
                ))}
            </div>
        </div>
        
        {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-mono">
                No projects found in this category.
            </div>
        )}

      </div>
    </div>
  );
};