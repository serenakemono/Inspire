import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ headerItems }) => {
  return (
    <nav>
        {headerItems.map((item) => (
          <li>
              <Link to={ `/${item.title}` }>{ item.title }</Link>
            </li>
        ))}
    </nav>
  )
}

export default NavBar