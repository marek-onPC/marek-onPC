import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loader(props) {
  return (
    <div className={ `loader ${ props.style === 'wide' ? 'wide' : 'normal' } ${ props.data !== null && 'loaded' }` }>
      <FontAwesomeIcon
        icon={ faSpinner }
        color={ '#00B0FF' }
        size='6x'
      />
    </div>
  )
}
