import React, { useEffect } from 'react';
import HomeHeader from '../components/HomeHeader';
import ColumnNavigation from '../components/ColumnNavigation';
import BackgroundBubbles from '../components/BackgroundBubbles';
import {
  faJs,
  faSass,
  faReact,
  faVuejs,
  faPhp,
  faGulp,
  faGithubSquare,
  faLinkedin
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
      icon : faGulp,
      'color' : '#D34A47'
    },
  }

  const social = {
    faGithubSquare: {
      icon : faGithubSquare,
      'color' : '#212121',
      'title' : 'GitHub',
      'link' : 'https://github.com/marek-onPC'
    },
    faLinkedin: {
      icon : faLinkedin,
      'color' : '#212121',
      'title' : 'LinkedIn',
      'link' : 'https://www.linkedin.com/in/marek-smieja/'
    }
  }

  useEffect(() => {
    document.title = 'marek-onpc.com'
  }, [])

  return (
    <div className='home'>
      <HomeHeader
        name={ 'Marek Smieja' }
        title={ 'front-end developer' }
        social={ social }
        icons={ icons }
      />
      <ColumnNavigation/>
      <BackgroundBubbles/>
    </div>
  );
}
