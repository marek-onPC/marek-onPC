import React from 'react'
import scrollToTop from '../utils/scrollToTop';

export default function NotFound() {
  scrollToTop();
  document.title = '404'

  return (
    <div className='not-found container'>
      <img src={ process.env.PUBLIC_URL + '/404.png' } alt='Not found graphic' />
    </div>
  )
}
