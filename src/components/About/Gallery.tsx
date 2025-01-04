import React from 'react';
import VideoGrid from '../VideoGrid';

const Gallery = () => {
  const videos = [
    { src: '/videos/vid3.mp4', title: 'Video' },
    { src: '/videos/vid4.mp4', title: 'Video' },
    { src: '/videos/vid5.mp4', title: 'Video' },
    { src: '/videos/vid6.mp4', title: 'Video' },
    { src: '/videos/vid7.mp4', title: 'Video' },
    { src: '/videos/vid8.mp4', title: 'Video' },
  ];
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12 pt-30">Gallery</h2>
        <VideoGrid videos={videos} />
      </div>
    </section>
  );
};

export default Gallery;
