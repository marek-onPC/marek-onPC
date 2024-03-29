import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStickyNote,
  faPlug,
  faBackward
} from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  const location = useLocation()
  const [pageTitle, setPageTitle] = useState('')

  const resetTitleAnimation = useCallback(() => {
    if (location.pathname !== '/') {
      let title = document.querySelector('.navigation__title')

      title.style.animation = 'none'
      setTimeout(function() {
        title.style.animation = ''
      }, 10);
    }
  }, [location])

  const setHomePageClass = useCallback(() => {
    if (location.pathname !== '/') {
      document.querySelector('html').classList.remove('home-page')
    } else {
      document.querySelector('html').classList.add('home-page')
    }
  }, [location])

  new MutationObserver(function() {
    setPageTitle(document.querySelector('title').innerHTML)
  }).observe(
    document.querySelector('title'),
    { subtree: false, characterData: true, childList: true }
  )

  useEffect(() => {
    resetTitleAnimation()
    setHomePageClass()
  })

  if (location.pathname !== '/') {
    return (
      <nav className='navigation'>
        <div className='navigation__inner'>
          <h1 className={ `navigation__title ${ location.pathname.replace(/\//g, '') }` }>{ pageTitle }</h1>
          <NavLink to="/" className='navigation__button'>
            <FontAwesomeIcon
              icon={ faBackward }
              size='2x'
            />
            <span>back to home</span>
          </NavLink>
          <NavLink to="/notes" className='navigation__button'>
            <FontAwesomeIcon
              icon={ faStickyNote }
              size='2x'
            />
            <span>notes</span>
          </NavLink>
          <NavLink to="/plugin" className='navigation__button'>
            <FontAwesomeIcon
              icon={ faPlug }
              size='2x'
            />
            <span>side project</span>
          </NavLink>
        </div>
      </nav>
    )
  } else {
    return null
  }
}
