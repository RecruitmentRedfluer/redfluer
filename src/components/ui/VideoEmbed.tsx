import React from 'react';

interface VideoEmbedProps {
  url: string;
  title: string;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url, title, className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-lg shadow-lg ${className}`} style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;