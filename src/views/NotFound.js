import React, { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

export default function NotFound() {
  useEffect(() => {
    document.title = '404'

    scrollToTop()
  }, [])

  return (
    <div className='not-found container'>
      <img src={ process.env.PUBLIC_URL + '/404.png' } alt='Not found graphic' />
    </div>
  )
}
