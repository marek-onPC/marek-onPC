import React from 'react';
import HomeHeader from '../components/HomeHeader';
import ColumnNavigation from '../components/ColumnNavigation';
import BackgroundBubbles from '../components/BackgroundBubbles';
import {
  faJs,
  faSass,
  faReact,
  faVuejs,
  faPhp,
  faWordpress
} from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const icons = {
    faJs: {
      icon : faJs,
      'color' : '#F0DB4F'
    },
    faSass: {
      icon : faSass,
      'color' : '#CC6699'
    },
    faReact: {
      icon : faReact,
      'color' : '#61DBFB'
    },
    faVuejs: {
      icon : faVuejs,
      'color' : '#42B883'
    },
    faPhp: {
      icon : faPhp,
      'color' : '#787CB5'
    },
    faWordpress: {
      icon : faWordpress,
      'color' : '#00749C'
    },
  }

  document.title = 'marek-onpc.com'

  return (
    <div className='home'>
      <HomeHeader
        name={ 'Marek Smieja' }
        title={ 'front-end developer' }
        icons={ icons }
      />
      <ColumnNavigation/>
      <BackgroundBubbles/>
    </div>
  );
}
