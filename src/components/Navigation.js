import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation()
  
  if (location.pathname !== '/') {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return null
  }
}
