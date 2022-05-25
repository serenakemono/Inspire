import React from 'react'
import { Link, Link as RouterLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button,
    IconButton,
    Drawer,
    MenuItem,
    SwipeableDrawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"

const Header = ({ headerItems }) => {

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const useStyles = makeStyles(() => ({
        header: {
            position: "fixed",
            backgroundColor: "#FFFFFF",
            paddingRight: "79px",
            paddingLeft: "118px",
            "@media (max-width: 900px)": {
                paddingLeft: 0,
            },
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
        },
        drawerContainer: {
            padding: "20px 30px",
        }
    }));

    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

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
        return headerItems.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "#000000",
                        className: menuButton,
                        component: RouterLink,
                        to: href
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

    const getDrawerChoices = () => {
        return headerItems.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "#000000",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };
        
    const displayMobile = () => {
        const handleDrawerOpen = () => {
            setState((prevState) =>
                ({ ...prevState, drawerOpen: true }));
        }
        const handleDrawerClose = () => {
            setState((prevState) =>
                ({ ...prevState, drawerOpen: false }));
        }
        return (
            <Toolbar>
                <IconButton
                    {...{
                        // allows the button to be positioned at the start of the toolbar
                        edge: "start",
                        color: "#000000",
                        // “aria-label": “menu" and “aria-haspopup": “true" are meant for 
                        // screen readers to notify users who have visual impairments that 
                        // this element is a menu and has a pop-up, respectively.
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        // solves the problem of too many re-renders
                        onClick: ()=>handleDrawerOpen(),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        // When we click on anything outside of the drawer, 
                        // the handleDrawerClose function will be called
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>
                        {getDrawerChoices()}
                    </div>
                </SwipeableDrawer>
                <div>{inspireLogo}</div>
            </Toolbar>
        );
    };
    
    return (
        <header>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}

export default Header