import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Cpu, Construction } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { toolsData } from '../data/toolsData';
import { Comments } from '../components/Comments';
import { ToolImage } from '../components/ToolImage';
import { SupportCard } from '../components/SupportCard';
import { DownloadStation } from '../components/DownloadStation';
import { VideoPlayer } from '../components/VideoPlayer';

export const ToolDetail: React.FC = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();

  // Find tool from centralized data
  const data = toolsData.find(t => t.id === toolId);

  // Fallback if not found
  if (!data) {
      return (
          <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl font-bold text-white mb-4">Tool Not Found</h1>
              <Button onClick={() => navigate('/tools')}>Return to Tools</Button>
          </div>
      );
  }

  // Handle "In Development" or empty sections
  const hasContent = data.contentBlocks && data.contentBlocks.length > 0;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <button 
            onClick={() => navigate('/tools')} 
            className="flex items-center text-zinc-500 hover:text-white mb-8 transition-colors"
        >
            <ArrowLeft size={16} className="mr-2" /> Back to Tools
        </button>

        <div className="mb-20">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-4">
                {data.category} Edition
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{data.name}</h1>
            
            <p className="text-xl text-zinc-400 w-full leading-relaxed mb-12">
                {data.description}
            </p>

            {data.videoUrl && data.videoUrl.trim() !== '' && (
                <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800 shadow-2xl mb-12">
                    <VideoPlayer url={data.videoUrl} />
                </div>
            )}
        </div>

        {hasContent ? (
            /* Modular Content Blocks */
            <div className="space-y-32">
                {data.contentBlocks?.map((block, idx) => {
                    const isEditorial = block.layout === 'float-left' || block.layout === 'float-right';

                    const renderBlockContent = () => (
                        <>
                            {block.title && <h2 className="text-3xl font-bold text-white mb-6">{block.title}</h2>}
                            
                            {/* Paragraphs Render */}
                            {block.bodyType === 'paragraphs' && (
                                <div className="space-y-4">
                                    {block.text.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-zinc-400 leading-relaxed text-lg">{paragraph}</p>
                                    ))}
                                </div>
                            )}

                            {/* Bullets Render */}
                            {block.bodyType === 'bullets' && (
                                <ul className="space-y-4 pt-2">
                                    {block.text.map((item, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-4 text-zinc-300">
                                            {/* Custom purple checkmark/dot */}
                                            <div className="w-2 h-2 mt-2.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)] shrink-0"></div> 
                                            <span className="leading-relaxed text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                             {/* Technical List Render */}
                            {block.bodyType === 'technical-list' && (
                                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6  text-sm text-indigo-300 shadow-inner mt-6">
                                    <ul className="space-y-2">
                                        {block.text.map((item, tIdx) => (
                                            <li key={tIdx} className="flex gap-4">
                                                <span className="text-zinc-600 select-none">{(tIdx + 1).toString().padStart(2, '0')}</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    );

                    if (isEditorial) {
                        return (
                            <div key={idx} className="clear-both overflow-hidden">
                                <div className={`relative group ${block.layout === 'float-left' ? 'float-left mr-6 mb-4' : 'float-right ml-6 mb-4'} max-w-[40%]`}>
                                    <div className={`absolute inset-0 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity ${idx % 2 === 0 ? 'bg-indigo-500/20' : 'bg-purple-500/20'}`}></div>
                                    <ToolImage 
                                        src={block.visual} 
                                        alt={block.title || "Tool Visualization"} 
                                        layout={block.imageLayout}
                                    />
                                </div>
                                <div className="space-y-6">
                                    {renderBlockContent()}
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center clear-both">
                            {/* Visual Column */}
                            <div className={`relative group ${block.layout === 'image-right' ? 'md:order-2' : 'md:order-1'}`}>
                                <div className={`absolute inset-0 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity ${idx % 2 === 0 ? 'bg-indigo-500/20' : 'bg-purple-500/20'}`}></div>
                                <ToolImage 
                                    src={block.visual} 
                                    alt={block.title || "Tool Visualization"} 
                                    layout={block.imageLayout}
                                />
                            </div>
                            
                            {/* Text Column */}
                            <div className={`space-y-6 ${block.layout === 'image-right' ? 'md:order-1' : 'md:order-2'}`}>
                                {renderBlockContent()}
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : (
            /* Coming Soon / Empty State */
            <div className="py-20 border border-zinc-800 rounded-3xl bg-zinc-900/30 flex flex-col items-center justify-center text-center">
                <Construction className="w-16 h-16 text-zinc-600 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-2">Under Construction</h2>
                <p className="text-zinc-400 max-w-md">
                    Detailed documentation and showcase materials for this tool are currently being compiled.
                </p>
            </div>
        )}

        {/* Technical Specifications */}
        {data.specs && data.specs.length > 0 && (
            <div className="mt-32 pt-16 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Cpu size={24} className="text-zinc-500" />
                            Technical Specs
                        </h3>
                        <p className="text-zinc-500 text-sm">
                            Detailed compatibility and performance metrics for pipeline integration.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {data.specs.map((spec, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-zinc-900 pb-2">
                                    <span className="text-zinc-500 text-sm">{spec.label}</span>
                                    <span className="text-zinc-200 font-medium">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {!data.isPro && <SupportCard />}

        {data.status === 'Active' && (
            <DownloadStation 
                gitUrl={data.gitUrl} 
                downloadUrl={data.downloadUrl} 
                isPro={data.isPro}
                price={data.price}
                purchaseUrl={data.purchaseUrl}
            />
        )}

        <Comments key={data.name} term={data.name} />

      </div>
    </div>
  );
};