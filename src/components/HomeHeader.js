import React from 'react'

export default function HomeHeader(props) {
  return (
    <div className='home-header'>
      <h1 className='home-header__name'>{ props.name }</h1>
      <h2 className='home-header__title'>{ props.title }</h2>
      <div className='home-header__separator'></div>
    </div>
  )
}
