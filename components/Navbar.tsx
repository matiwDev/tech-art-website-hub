import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tools', path: '/tools' },
    { label: 'VFX & Shaders', path: '/vfx' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
  ];

  const handleMobileNav = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-zinc-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Text Logo */}
        <NavLink to="/" className="flex items-center gap-1 group z-50">
          <span className="text-2xl font-bold text-white tracking-[-1px] font-sans">
            Creatush<span className="text-purple-500">.</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-white ${
                  isActive ? 'text-white' : 'text-zinc-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button variant="primary" size="sm" onClick={() => navigate('/contact')}>
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 md:hidden animate-fade-in-up">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleMobileNav(link.path)}
                className={`text-left text-lg font-medium ${
                  location.pathname === link.path ? 'text-white' : 'text-zinc-400'
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button className="w-full mt-4" onClick={() => handleMobileNav('/contact')}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};