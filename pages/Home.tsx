import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Rocket, Users, ExternalLink, BookOpen, Search, Cpu, DraftingCompass } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Main Content Container - Aligned with Navbar */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-indigo-400 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              v2.0 is now live
            </div>
            
            {/* Typography Scaling & Line Height */}
            <h1 className="font-bold tracking-tight text-white mb-6 leading-[1.1] text-[clamp(2rem,5vw,4rem)]">
              Engineered for Performance. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Architected for Scale.
              </span>
            </h1>
            
            <p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">
              Modular editor tools, high-fidelity shaders, and scalable VFX systems. Clean code and flexible workflows designed for technical excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => navigate('/tools')}>
                Explore the Tools <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/vfx')}>
                View VFX Portfolio
              </Button>
            </div>
          </div>

          {/* Floating Cards Graphic */}
          <div className="relative h-[500px] hidden lg:block animate-fade-in-up delay-200">
             <div className="absolute top-10 right-10 w-64 h-80 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl rotate-6 hover:rotate-0 transition-all duration-500 z-10 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-4 group-hover:scale-105 transition-transform overflow-hidden relative">
                   <img src="https://lh3.googleusercontent.com/u/0/d/1SkLUsVVTO_JnyPps-LQNbVskpnkGvLdy" className="object-cover w-full h-full opacity-80" alt="Abstract Art" />
                </div>
                <div className="h-2 w-20 bg-zinc-800 rounded-full mb-2"></div>
                <div className="h-2 w-32 bg-zinc-800 rounded-full"></div>
             </div>

             <div className="absolute top-40 right-40 w-64 h-80 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-2xl -rotate-6 hover:rotate-0 transition-all duration-500 z-20 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl mb-4 group-hover:scale-105 transition-transform overflow-hidden relative">
                   <img src="https://lh3.googleusercontent.com/u/0/d/1g0W0QxNxuHiJAxIu7SrIG0vvs8xl-xAP" className="object-cover w-full h-full opacity-80" alt="3D Render" />
                </div>
                <div className="flex items-center justify-between mb-2">
                   <div className="h-2 w-24 bg-zinc-800 rounded-full"></div>
                   <div className="h-4 w-4 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                   <div className="h-full w-2/3 bg-indigo-500 rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">The Creatush Methodology</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">From conceptualization to final deployment, our workflow is designed for speed and precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Search, 
                title: 'Audit & Review', 
                desc: 'Analyzing project bottlenecks and identifying technical debt.', 
                progress: 35,
                color: 'text-blue-400',
                barColor: 'bg-blue-500' 
              },
              { 
                icon: DraftingCompass, 
                title: 'Architecture & Flow', 
                desc: 'Brainstorming optimized logic paths and scalable blueprints.', 
                progress: 78,
                color: 'text-indigo-400',
                barColor: 'bg-indigo-500' 
              },
              { 
                icon: Cpu, 
                title: 'Precision Execution', 
                desc: 'Building high-performance, modular systems with rigorous profiling.', 
                progress: 100,
                color: 'text-pink-400',
                barColor: 'bg-pink-500' 
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
                <div className={`w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform`}>
                  <step.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{step.desc}</p>
                
                {/* Visual Progress Bar */}
                <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${step.barColor} transition-all duration-1000 ease-out`} 
                    style={{ width: `${step.progress}%` }}
                  />
                </div>
                <div className="flex justify-end mt-2">
                   <span className="text-xs text-zinc-500 font-mono">{step.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Art Collaboration Hub / Blog Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Community Lab</h2>
              
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Join the conversation on technical art, shader math, and custom editor tools. Leave your feedback directly on the latest dev-logs.
              </p>
              
              <div className="flex justify-center">
                <Button onClick={() => navigate('/blog')}>
                   Enter the Lab <BookOpen size={16} className="ml-2" />
                </Button>
              </div>
           </div>
        </div>
      </section>

      {/* The Architect Section (Bio) */}
      <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-900/5 blur-[120px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Avatar */}
                <div className="relative group mx-auto lg:mx-0">
                    {/* Tech Brackets */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-indigo-500/30 rounded-br-2xl"></div>
                    
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                        <img 
                            src="https://res.cloudinary.com/djcksi74n/image/upload/q_auto,f_auto/v1771967077/WhatsApp_Image_2025-12-09_at_10.27.07_1_j1pu1h.jpg" 
                            alt="The Architect" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                </div>

                {/* Right Side: Bio */}
                <div>
                    <div className="inline-block px-3 py-1 mb-6 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm">
                        <span className="text-xs font-mono text-indigo-400 tracking-wider uppercase">The Architect</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Bridging the Gap Between <br/>
                        <span className="text-indigo-400">Code</span> & <span className="text-pink-400">Creativity</span>
                    </h2>
                    
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        I am a Technical Artist dedicated to building tools that empower creators.
                        Specializing in Unity and procedural workflows, 
                        I transform complex technical friction into intuitive, high-performance solutions. 
                        At Creatush, my mission is to ensure technology never stands in the way of the vision,
                        making the creative process lighter, smarter, and smoother.
                    </p>

                    {/* Technical Touch List */}
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 font-mono text-sm space-y-3">
                        <div className="flex items-center gap-4">
                            <span className="text-zinc-500 w-32 shrink-0">Current Focus:</span>
                            <span className="text-indigo-300">AI Workflow Integration</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-zinc-500 w-32 shrink-0">Tool Stack:</span>
                            <span className="text-white">HLSL, Python, C#, Vibe Coding</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-zinc-500 w-32 shrink-0">Hobbies:</span>
                            <span className="text-pink-300">Soccer and Puzzles</span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};