import React from 'react';
import HomeHeader from '../components/HomeHeader';
import BackgroundBubbles from '../components/BackgroundBubbles';

export default function Home() {
  return (
    <div className='home'>
      <HomeHeader
        name={ 'Marek Smieja' }
        title={ 'front-end developer' }
      />
      <BackgroundBubbles/>
    </div>
  );
}
