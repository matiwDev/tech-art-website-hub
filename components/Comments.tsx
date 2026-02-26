import React, { useEffect, useRef } from 'react';

interface CommentsProps {
  term: string; // This will be the unique title of your blog post
}

export const Comments: React.FC<CommentsProps> = ({ term }) => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    commentsRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'matiwDev/tech-art-website-hub');
    script.setAttribute('data-repo-id', 'R_kgDORYn24w'); // Ensure this is your -hub ID
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDORYn2484C3LrA'); // Ensure this is your -hub ID
    
    // THE FIX: Use 'specific' mapping and pass the term
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', term); 
    
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    commentsRef.current.appendChild(script);
  }, [term]); // Reloads whenever the 'term' (post title) changes

  return (
    <div className="w-full mt-12 pt-8 border-t border-zinc-800">
      <h3 className="text-xl font-bold text-white mb-6">Join the Discussion</h3>
      <div ref={commentsRef} className="min-h-[200px]" />
    </div>
  );
};