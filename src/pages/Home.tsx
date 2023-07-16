import Banner from '@/components/Banner';
import React from 'react';
import FeaturedBook from './Books/FeaturedBook';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-20">
        <FeaturedBook />
      </div>
    </div>
  );
};

export default Home;
