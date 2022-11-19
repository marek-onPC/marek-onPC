import React, { useEffect, useCallback } from 'react'
import scrollToTop from '../utils/scrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

export default function GoToTop() {
  const onScroll = useCallback(() => {
    const goToTopElement = document.querySelector('.go-to-top')

    document.addEventListener('scroll', function () {
      if (window.pageYOffset > 500) {
        goToTopElement.classList.remove('hidden')
      } else {
        goToTopElement.classList.add('hidden')
      }
    })
  }, [])

  useEffect(() => {
    onScroll()
  }, [onScroll])

  return (
    <div 
      className='go-to-top hidden'
      onClick={ () => { scrollToTop('smooth') } }
    >
      <FontAwesomeIcon
        icon={ faChevronCircleUp }
        color={ '#00B0FF' }
        size='6x'
      />
    </div>
  )
}
