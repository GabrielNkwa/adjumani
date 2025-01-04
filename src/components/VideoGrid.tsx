import React from 'react';

const VideoGrid = ({ videos }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {videos.map((video, index) => (
          <div key={index} className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
            <video
              className="h-full w-full object-cover"
              controls
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">{video.title}</h3>
                <p className="mt-2">Click to play</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;