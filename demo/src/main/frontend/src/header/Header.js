import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom"

const headersData = [
    {
        label: "home",
        href: "/home"
    },
    {
        label: "getinspired",
        href: "/getinspired"
    },
    {
        label: "community",
        href: "/community"
    },
    {
        label: "messages",
        href: "/messages"
    },
    {
        label: "courses",
        href: "/courses"
    },
    {
        label: "me",
        href: "/me"
    }
];

const Header = () => {

    const useStyles = makeStyles(() => ({
        header: {
            backgroundColor: "#FFFFFF",
            paddingRight: "79px",
            paddingLeft: "118px"
        },
        logo: {
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            color: "#E51B23",
            textAlign: "left",
        },
        menuButton: {
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px"
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        }
    }));

    const { header, logo, menuButton, toolbar } = useStyles();

    /**
     * variant="h6" will ensure that the size of our logo is 
     * of the size h6. However, we want the logo to still 
     * maintain an element of h1 when it shows up on the DOM. 
     * Accessibility-wise, a screenreader will automatically 
     * read an h1 element first. Specifying component="h1" 
     * will ensure that this happens.
     */
    const inspireLogo = (
        <Typography
            variant="h6"
            component="h1"
            className={logo}
        >
            Inspire
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "#000000",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };
    
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {inspireLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };
    
    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );

    // return (
    //     <header>
    //         <NavBar navBarItems = {navBarItems} />
    //     </header>
    // )
}

export default Header