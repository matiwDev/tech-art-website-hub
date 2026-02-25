import React, { useState } from 'react';
import { blogData } from '../data/blogData';
import { Calendar, Tag, ChevronRight, Lightbulb } from 'lucide-react';
import { Comments } from '../components/Comments';

export const Blog: React.FC = () => {
  const [activePostId, setActivePostId] = useState(blogData[0].id);
  
  const activePost = blogData.find(p => p.id === activePostId) || blogData[0];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">The Lab</h1>
            <p className="text-zinc-400 max-w-2xl">
                Technical deep-dives, dev-logs, and community discussions. 
                Explore the latest findings in tech art and tool development.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar / Mobile Dropdown */}
            <div className="w-full lg:w-1/4 shrink-0">
                {/* Mobile Selector */}
                <div className="lg:hidden mb-8">
                    <label className="text-sm text-zinc-500 mb-2 block font-medium font-mono">SELECT TOPIC</label>
                    <div className="relative">
                        <select 
                            value={activePostId}
                            onChange={(e) => setActivePostId(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 appearance-none focus:ring-2 focus:ring-indigo-500 outline-none"
                        >
                            {blogData.map(post => (
                                <option key={post.id} value={post.id}>{post.title}</option>
                            ))}
                        </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                            <ChevronRight className="rotate-90" size={16} />
                        </div>
                    </div>
                </div>

                {/* Desktop Tabs */}
                <div className="hidden lg:flex flex-col gap-2 sticky top-32 max-h-[80vh] overflow-y-auto custom-scrollbar pr-2">
                    {blogData.map(post => (
                        <button
                            key={post.id}
                            onClick={() => setActivePostId(post.id)}
                            className={`text-left px-6 py-4 rounded-xl transition-all border group backdrop-blur-md ${
                                activePostId === post.id 
                                ? 'bg-zinc-900/80 border-indigo-500/50 text-white shadow-lg shadow-indigo-500/10' 
                                : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30'
                            }`}
                        >
                            <span className={`text-xs font-mono mb-1 block transition-colors uppercase ${activePostId === post.id ? 'text-indigo-400' : 'text-zinc-600 group-hover:text-zinc-400'}`}>{post.category}</span>
                            <span className="font-medium leading-snug block text-sm">{post.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow max-w-3xl">
                <article className="bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 md:p-12 mb-12 min-h-[500px]">
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8 border-b border-zinc-800 pb-6 font-mono">
                        <span className="flex items-center gap-2"><Calendar size={14} /> {activePost.date}</span>
                        <span className="flex items-center gap-2 px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50 text-xs"><Tag size={12} /> {activePost.category}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">{activePost.title}</h2>

                    {activePost.proTip && (
                        <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-6 mb-10 flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Lightbulb size={20} />
                            </div>
                            <div>
                                <h4 className="text-indigo-300 font-bold text-sm uppercase tracking-wide mb-1 font-mono">Pro Tip</h4>
                                <p className="text-indigo-100/90 text-sm italic">
                                    "{activePost.proTip}"
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
                        {activePost.blocks.map((block, idx) => {
                            if (block.type === 'heading') return <h3 key={idx} className="text-2xl font-bold text-white mt-10 mb-2 border-l-4 border-indigo-500 pl-4">{block.content}</h3>;
                            if (block.type === 'subheading') return <h4 key={idx} className="text-xl font-semibold text-zinc-100 mt-8 mb-2">{block.content}</h4>;
                            if (block.type === 'code') return (
                                <div key={idx} className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 font-mono text-sm overflow-x-auto my-6 text-indigo-300 shadow-inner">
                                    <pre>{block.content}</pre>
                                </div>
                            );
                            if (block.type === 'list' && Array.isArray(block.content)) return (
                                <ul key={idx} className="list-disc pl-6 space-y-3 marker:text-indigo-500 my-4">
                                    {block.content.map((item, i) => <li key={i} className="pl-1">{item}</li>)}
                                </ul>
                            );
                            return <p key={idx}>{block.content}</p>;
                        })}
                    </div>
                    
                    {/* Giscus Comments */}
                    <Comments />
                </article>
            </div>
        </div>
      </div>
    </div>
  );
};