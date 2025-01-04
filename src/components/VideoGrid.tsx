import React from 'react';

const VideoGrid = ({ videos }) => {
  const handlePlay = (e) => {
    console.log('Video is playing: ', e.target.src);
  };

  const handlePause = (e) => {
    console.log('Video is paused: ', e.target.src);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative aspect-video overflow-hidden rounded-xl border bg-muted"
          >
            <video
              className="h-full w-full object-cover"
              controls
              width="100%"
              onPlay={handlePlay}
              onPause={handlePause}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
