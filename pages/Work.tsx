import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Neon Horizon', category: '3D Art', size: 'large' },
  { id: 2, title: 'Abstract Flow', category: 'Motion Design', size: 'small' },
  { id: 3, title: 'Cyber Structure', category: 'Architecture', size: 'medium' },
  { id: 4, title: 'Glass Morphism', category: 'UI Design', size: 'medium' },
  { id: 5, title: 'Void State', category: 'Concept Art', size: 'small' },
  { id: 6, title: 'Digital Flora', category: 'Generative', size: 'large' },
];

export const Work: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Selected Work</h1>
            <p className="text-zinc-400 max-w-xl">
              A curation of our finest digital explorations. 
              Each piece represents a fusion of technology and art.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-zinc-400">
            <button className="text-white border-b border-white pb-1">All</button>
            <button className="hover:text-white transition-colors pb-1">3D</button>
            <button className="hover:text-white transition-colors pb-1">Interface</button>
            <button className="hover:text-white transition-colors pb-1">Motion</button>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800 ${
                project.size === 'large' ? 'md:row-span-2' : 
                project.size === 'medium' ? 'md:col-span-1' : ''
              }`}
            >
              <img 
                src={`https://picsum.photos/600/800?random=${project.id + 20}`} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-400 text-xs font-mono mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
