import React, { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';
import HomeHeader from '../components/HomeHeader';
import { NavLink } from "react-router-dom";
import BackgroundBubbles from '../components/BackgroundBubbles';
import {
  faJs,
  faReact,
  faVuejs,
  faSass,
  faPhp,
  faGulp,
  faHtml5,
  faNpm,
  faJira,
  faSketch,
  faWordpressSimple,
  faGitAlt,
  faGithubSquare,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown,
  faHashtag,
  faStickyNote,
  faPlug
} from '@fortawesome/free-solid-svg-icons';


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
    faHtml5: {
      icon : faHtml5,
      'color' : '#F06529'
    },
    faNpm: {
      icon : faNpm,
      'color' : '#CB3837'
    },
    faJira: {
      icon : faJira,
      'color' : '#0052CC'
    },
    faSketch: {
      icon : faSketch,
      'color' : '#FFCB2F'
    },
    faWordpressSimple: {
      icon : faWordpressSimple,
      'color' : '#00749C'
    },
    faGitAlt: {
      icon : faGitAlt,
      'color' : '#3E2C00'
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
    },
    faHashtag: {
      icon : faHashtag,
      'color' : '#212121',
      'title' : 'Wantedly',
      'link' : 'https://www.wantedly.com/id/smieja_marek'
    }
  }

  function scrollToIntro() {
    const sectionTechOffset = document.getElementById('introduction').getBoundingClientRect().top + document.documentElement.scrollTop

    setTimeout(function() {
      window.scrollTo({
        top: sectionTechOffset,
        left: 0,
        behavior: 'smooth'
      });
    }, 50)
  }

  function sectionToShow(section) {
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;
    var isVisible = sectionTop < (window.innerHeight - (window.innerHeight/2.5)) && (sectionBottom - (window.innerHeight/2.5)) >= 0;

    if (isVisible) {
      section.classList.add('active')
    }
  }

  useEffect(() => {
    var introductionSection = document.getElementById('introduction')
    var technologiesSection = document.getElementById('technologies')
    var workSection = document.getElementById('work')

    document.title = 'marek-onpc.com'
    scrollToTop()

    document.addEventListener("scroll", () => {
      sectionToShow(introductionSection)
      sectionToShow(technologiesSection)
      sectionToShow(workSection)
    })
  }, [])

  return (
    <div className='home'>
      <div id='welcome' className='home__welcome'>
        <HomeHeader
          name={ 'Marek Smieja' }
          title={ 'front-end developer' }
          social={ social }
        />

        <div
          className='home__scroll-bottom'
          onClick={ () => { scrollToIntro() } }
        >
          <span>scroll bottom</span>
          <FontAwesomeIcon
            icon={ faChevronDown }
            color={ '#00B0FF' }
            size='2x'
          />
        </div>
      </div>

      <div id='introduction' className='home__introduction'>
        <h2 className='home__introduction-title'>introduction</h2>
        <div className='home__introduction-about container mt-5'>
          <p className='text-center'>
            <sup style={{ opacity: 0.8, fontWeight: '600' }}>
              <span style={{ color: '#777' }}>&lt;</span>
              <span style={{ color: '#277dff' }}>name</span>
              <span style={{ color: '#777' }}>&gt;</span> 
            </sup>

            <span>&nbsp;&nbsp;marek smieja&nbsp;&nbsp;</span>
          </p>
          <p className='text-center'>
            <sup style={{ opacity: 0.8, fontWeight: '600' }}>
              <span style={{ color: '#777' }}>&lt;</span>
              <span style={{ color: '#277dff' }}>position</span>
              <span style={{ color: '#777' }}>&gt;</span> 
            </sup>

            <span>&nbsp;&nbsp;frontend dev&nbsp;&nbsp;</span>
          </p>
          <p className='text-center'>
            <sup style={{ opacity: 0.8, fontWeight: '600' }}>
              <span style={{ color: '#777' }}>&lt;</span>
              <span style={{ color: '#277dff' }}>location</span>
              <span style={{ color: '#777' }}>&gt;</span> 
            </sup>

            <span>&nbsp;&nbsp;japan&nbsp;&nbsp;</span>
          </p>
          <p className='text-center'>
            <sup style={{ opacity: 0.8, fontWeight: '600' }}>
              <span style={{ color: '#777' }}>&lt;</span>
              <span style={{ color: '#277dff' }}>description</span>
              <span style={{ color: '#777' }}>&gt;</span> 
            </sup>

            <span>&nbsp;&nbsp;interested in web dev technologies, JavaScript with frameworks, sometimes some back-end dev&nbsp;&nbsp;</span> 
          </p>
        </div>
      </div>

      <div id='technologies' className='home__technologies'>
        <h2 className='home__technologies-title mt-0'>technologies</h2>
        <div className='container mt-5'>
          <div className='home__technologies-icons'>
            {
              Object.values(icons).map((icon, index) =>
                <FontAwesomeIcon
                  key={ index }
                  icon={ icon.icon }
                  color={ icon.color }
                  className={`icon icon-${index}`}
                  pull="left"
                />
              )
            }
          </div>
        </div>

      </div>

      <div id='work' className='home__work'>
        <h2 className='home__work-title mt-0'>work</h2>
        <div className='home__work-buttons container mt-5'>
            <a
              className='home__work-button'
              href="github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={ faGithub }
                size='3x'
              />
              <span>github</span>
            </a>
            <NavLink to="/notes" className='home__work-button'>
              <FontAwesomeIcon
                icon={ faStickyNote }
                size='3x'
              />
              <span>notes</span>
            </NavLink>
            <NavLink to="/plugin" className='home__work-button'>
              <FontAwesomeIcon
                icon={ faPlug }
                size='3x'
              />
              <span>side <br></br>project</span>
            </NavLink>
        </div>
      </div>
      <BackgroundBubbles/>
    </div>
  );
}
