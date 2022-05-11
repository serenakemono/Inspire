import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ navBarItems }) => {
  return (
    <nav>
        {navBarItems.map((item) => (
          <li key={item.id}>
              <Link to={ `/${item.id}` }>{ item.title }</Link>
            </li>
        ))}
    </nav>
  )
}

export default NavBar