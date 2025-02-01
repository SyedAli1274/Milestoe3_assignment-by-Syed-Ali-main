'use client';
import React, { useRef } from 'react';
import HeroSlider from './Components/Hero';
import LatestPosts from './Components/latestpost';

const HomePage = () => {
  const latestPostsRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <HeroSlider latestPostsRef={latestPostsRef} />
      <LatestPosts ref={latestPostsRef} />
    </div>
  );
};

export default HomePage;