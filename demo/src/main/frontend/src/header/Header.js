import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar';

const Header = () => {
    const [headerItems, setHeaderItems] = useState([
        {
            id: "headerItem1",
            title: "Explore"
        },
        {
            id: "headerItem2",
            title: "Me"
        }
    ]);

    return (
        <header>
            <NavBar headerItems = {headerItems} />
        </header>
    )
}

export default Header