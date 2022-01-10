import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStickyNote,
  faUser,
  faPlug
} from '@fortawesome/free-solid-svg-icons';


export default function ColumnNavigation() {
  return (
    <nav className='column-navigation'>
      <Link to="/about" className='column-navigation__button button-0'>
        <FontAwesomeIcon
          icon={ faUser }
          size='2x'
        />
        <span>about</span>
      </Link>
      <Link to="/notes" className='column-navigation__button button-1'>
        <FontAwesomeIcon
          icon={ faStickyNote }
          size='2x'
        />
        <span>notes</span>
      </Link>
      <Link to="/plugin" className='column-navigation__button button-2'>
        <FontAwesomeIcon
          icon={ faPlug }
          size='2x'
        />
        <span>blocksplus plugin</span>
      </Link>
    </nav>
  )
}