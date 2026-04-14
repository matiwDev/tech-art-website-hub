import React from 'react';

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  // Helper to determine if URL is YouTube
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  const isVimeo = url.includes('vimeo.com');

  let embedUrl = url;

  if (isYouTube) {
    // Extract video ID and create embed URL
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
  } else if (isVimeo) {
    // Extract Vimeo ID
    const vimeoIdMatch = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
    if (vimeoIdMatch && vimeoIdMatch[1]) {
      embedUrl = `https://player.vimeo.com/video/${vimeoIdMatch[1]}`;
    }
  }

  if (isYouTube || isVimeo) {
    return (
      <div className="relative w-full pb-[56.25%] h-0">
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
        ></iframe>
      </div>
    );
  }

  // Fallback for direct MP4 or other video formats
  return (
    <video 
      src={url} 
      controls 
      className="w-full h-auto"
      playsInline
    >
      Your browser does not support the video tag.
    </video>
  );
};
