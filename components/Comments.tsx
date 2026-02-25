import React, { useEffect, useRef } from 'react';

export const Comments: React.FC = () => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'matiwDev/tech-art-website');
    script.setAttribute('data-repo-id', 'R_kgDORYj9Jw');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDORYj9J84C3MlY');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Clean up any existing script to avoid duplicates
    commentsRef.current.innerHTML = '';
    commentsRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full mt-12 pt-8 border-t border-zinc-800">
      <h3 className="text-xl font-bold text-white mb-6">Join the Discussion</h3>
      <div ref={commentsRef} className="min-h-[200px]" />
    </div>
  );
};