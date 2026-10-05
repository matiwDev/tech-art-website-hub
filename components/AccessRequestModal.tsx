import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

interface AccessRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
}

export const AccessRequestModal: React.FC<AccessRequestModalProps> = ({ isOpen, onClose, toolName }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Reset state when modal closes/opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/gabrielamw88@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-xl bg-zinc-900/90 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl animate-fade-in-up">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
          <div>
            <h2 className="text-xl font-bold text-white font-sansation">Request Access: {toolName}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="toolName" value={toolName} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 ml-1">Full Name</label>
                  <input 
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 ml-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">GitHub / Portfolio (Optional)</label>
                <input 
                  name="links"
                  type="text"
                  placeholder="github.com/username"
                  className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">Reason for Request</label>
                <textarea 
                  required
                  name="reason"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-zinc-700 resize-none"
                />
              </div>

              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Submit Request
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-12 flex flex-col items-center text-center space-y-6 animate-fade-in-up">
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-sansation">Request Sent Successfully</h3>
                <p className="text-zinc-400 max-w-sm mx-auto">
                  Thank you for your interest! We've received your request for <span className="text-white font-medium">{toolName}</span> and will review it shortly.
                </p>
              </div>
              <Button 
                onClick={onClose}
                variant="outline"
                className="mt-4 px-8 border-zinc-800 text-zinc-400 hover:text-white"
              >
                Close Window
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
