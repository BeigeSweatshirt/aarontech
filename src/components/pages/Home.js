import React from 'react';
import '../css/App.css';
import Cards from '../widgets/Cards';
import HeroSection from '../widgets/HeroSection';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;