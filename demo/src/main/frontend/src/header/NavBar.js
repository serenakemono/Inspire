import React from 'react'

const NavBar = ({ headerItems }) => {
  return (
    <ul>
        {headerItems.map((item) => (
            <li className="headerItem" key ={item.id}>
                <div>{item.title}</div>
            </li>
        ))}
    </ul>
  )
}

export default NavBar