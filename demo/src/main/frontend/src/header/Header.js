import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar';

const Header = () => {
    const [navBarItems, setNavBarItems] = useState([
        {
            id: "home",
            title: "Home"
        },
        {
            id: "getinspired",
            title: "Get Inspired"
        },
        {
            id: "community",
            title: "Community"
        },
        {
            id: "messages",
            title: "Messages"
        },
        {
            id: "courses",
            title: "Courses"
        },
        {
            id: "me",
            title: "Me"
        }
    ]);

    return (
        <header>
            <NavBar navBarItems = {navBarItems} />
        </header>
    )
}

export default Header