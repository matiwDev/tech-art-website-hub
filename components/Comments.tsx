import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const Comments: React.FC = () => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!commentsRef.current) return;

    // 1. Clear the container
    commentsRef.current.innerHTML = '';

    // 2. Create the script
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    
    // UPDATED REPO NAME
    script.setAttribute('data-repo', 'matiwDev/tech-art-website-hub');
    
    // !!! IMPORTANT: PASTE YOUR NEW IDs FROM THE GISCUS WEBSITE HERE !!!
    script.setAttribute('data-repo-id', 'R_kgDORYn24w');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDORYn2484C3LrA');
    
    // Use 'pathname' - it's the cleanest if your URLs are distinct
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // 3. Append to ref
    commentsRef.current.appendChild(script);

  }, [location.pathname]); // Forces refresh on navigation

  return (
    <div className="w-full mt-12 pt-8 border-t border-zinc-800">
      <h3 className="text-xl font-bold text-white mb-6">Join the Discussion</h3>
      <div ref={commentsRef} className="min-h-[200px]" />
    </div>
  );
};