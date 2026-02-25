import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4 font-sans">
            Creatush<span className="text-purple-500">.</span>
          </h3>
          <p className="text-zinc-400 max-w-sm">
            Empowering creators with next-generation tools and a platform to share ideas, collaborate and build together.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li onClick={() => navigate('/')} className="hover:text-white cursor-pointer transition-colors">Home</li>
            <li onClick={() => navigate('/vfx')} className="hover:text-white cursor-pointer transition-colors">VFX & Shaders</li>
            <li onClick={() => navigate('/tools')} className="hover:text-white cursor-pointer transition-colors">Tools</li>
            <li onClick={() => navigate('/blog')} className="hover:text-white cursor-pointer transition-colors">Technical Blog</li>
            <li onClick={() => navigate('/contact')} className="hover:text-white cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/matiwDev" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/matias-wainstein-845a65a8/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-500 text-xs">
          © {new Date().getFullYear()} Creatush. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs text-zinc-600 font-mono">
            <button onClick={() => navigate('/privacy')} className="hover:text-zinc-400 transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-zinc-400 transition-colors">Terms of Use</button>
            <button onClick={() => navigate('/support')} className="hover:text-zinc-400 transition-colors">Support</button>
        </div>
      </div>
    </footer>
  );
};