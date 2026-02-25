import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Microscope } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { toolsData } from '../data/toolsData';

export const Tools: React.FC = () => {
  const navigate = useNavigate();

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Lite': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Pro': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'Utility': return 'text-zinc-400 bg-zinc-800/50 border-zinc-700';
      default: return 'text-zinc-400 bg-zinc-800 border-zinc-700';
    }
  };

  const getStatusColor = (status: string) => {
      return status === 'Active' 
        ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' 
        : 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]';
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Creative Tools</h1>
          <p className="text-zinc-400 max-w-2xl">
            A suite of powerful utilities designed to accelerate your workflow. 
            From performance optimization to workflow automation.
          </p>
        </div>

        {/* Technical Grid Container with Brackets */}
        <div className="relative p-4 md:p-8 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm">
            {/* Technical Brackets */}
            <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-zinc-600 rounded-tl-lg pointer-events-none"></div>
            <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-zinc-600 rounded-tr-lg pointer-events-none"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-zinc-600 rounded-bl-lg pointer-events-none"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-zinc-600 rounded-br-lg pointer-events-none"></div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {toolsData.map((tool) => {
              const isActive = tool.status === 'Active';
              
              return (
                <div 
                  key={tool.id}
                  onClick={() => isActive ? navigate(`/tools/${tool.id}`) : navigate('/blog')}
                  className={`group relative p-6 rounded-2xl border bg-zinc-900/40 backdrop-blur-xl border-zinc-800 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer ${
                      isActive
                      ? 'hover:border-purple-500/50 hover:bg-zinc-900/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10' 
                      : 'opacity-80 grayscale-[0.3] hover:grayscale-0 hover:opacity-100 hover:border-zinc-700'
                  }`}
                >
                  {/* In Lab Badge for Development Tools */}
                  {!isActive && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-xl z-20 shadow-lg">
                      In Lab
                    </div>
                  )}

                  {/* Scanning Light Sweep Animation */}
                  {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-scan pointer-events-none skew-x-12 z-0" />
                  )}

                  <div className="relative z-10 flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-zinc-950/50 border border-zinc-800 flex items-center justify-center transition-transform ${isActive ? 'group-hover:scale-110 group-hover:border-purple-500/30' : ''}`}>
                          <tool.icon className={`transition-colors ${isActive ? 'text-zinc-200 group-hover:text-purple-400' : 'text-zinc-500'}`} size={24} />
                      </div>
                      <div className={`px-2 py-1 rounded-md border text-[10px] uppercase font-bold tracking-wider font-mono ${getCategoryColor(tool.category)}`}>
                          {tool.category}
                      </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-2 mb-2">
                      <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white group-hover:text-purple-100' : 'text-zinc-300'}`}>{tool.name}</h3>
                      <span className="text-xs text-zinc-500 font-mono">v{tool.version}</span>
                  </div>
                  
                  <p className="relative z-10 text-zinc-400 text-sm mb-8 flex-grow leading-relaxed">
                      {tool.description}
                  </p>
                  
                  <div className="relative z-10 mt-auto pt-6 border-t border-zinc-800/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(tool.status)}`}></div>
                          <span className="text-xs text-zinc-500 font-medium font-mono uppercase">{tool.status}</span>
                      </div>
                      
                      {isActive ? (
                          <Button 
                              variant="ghost"
                              size="sm" 
                              className="text-zinc-300 group-hover:text-white p-0 hover:bg-transparent font-mono text-xs"
                          >
                              DETAILS <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                      ) : (
                          <Button 
                              variant="ghost"
                              size="sm" 
                              className="text-indigo-400 group-hover:text-indigo-300 p-0 hover:bg-transparent font-mono text-xs"
                          >
                              FOLLOW ROADMAP <Microscope size={14} className="ml-2" />
                          </Button>
                      )}
                  </div>
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </div>
  );
};