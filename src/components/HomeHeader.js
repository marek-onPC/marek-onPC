import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomeHeader(props) {
  return (
    <div className='home-header'>
      <h1 className='home-header__name'>{ props.name }</h1>
      <h2 className='home-header__title'>{ props.title }</h2>
      <div className='home-header__social'>
        {
          Object.values(props.social).map((icon, index) =>
            <a
              href={ icon.link }
              target="_blank"
              rel="noreferrer"
              key={ index }
            >
              <FontAwesomeIcon
                icon={ icon.icon }
                color={ icon.color }
                className={`icon icon-${index}`}
              />
              { icon.title }
            </a>
          )
        }
      </div>
      <div className='home-header__separator'></div>
      <div className='home-header__icons'>
        {
          Object.values(props.icons).map((icon, index) =>
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
  )
}
