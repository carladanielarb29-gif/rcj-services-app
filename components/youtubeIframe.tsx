// components/YouTubeEmbed.js
import React from 'react';


interface YouTubeEmbedProps {
    videoId: string,
}

const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {
  return (
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      ></iframe>
      <style jsx>{`
        .video-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;
        }
        .video-responsive iframe {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default YouTubeEmbed;