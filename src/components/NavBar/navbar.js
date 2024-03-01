import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { elastic as Menu } from 'react-burger-menu';

const Navbar = () => {
    // State to control the open/close state of the burger menu
    const [isOpen, setIsOpen] = useState(false);
    // State to track whether the screen is a mobile device
    const [isMobile, setIsMobile] = useState(false);

    // Function to handle burger menu toggle
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Function to check if the screen is a mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint if necessary
        };

        // Check on initial render
        checkMobile();

        // Event listener for window resize to update mobile state
        window.addEventListener('resize', checkMobile);

        // Cleanup function
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <nav className="navbar">
            {/* Regular desktop navbar */}
            {!isMobile && (
                <>
                    <img src={logo} alt="logo" className='logo' />
                    <div className="desktopMenu">
                        {/* Link to the Intro section */}
                        <Link to="intro" className="desktopMenuListItem" smooth={true} offset={-80}>Home</Link>
                        {/* Link to the About section */}
                        <Link to="about" className="desktopMenuListItem" smooth={true} offset={-80}>About</Link>
                        {/* Link to the Projects section */}
                        <Link to="projects" className="desktopMenuListItem" smooth={true} offset={-80}>Projects</Link>
                        {/* Link to the Experience section */}
                        <Link to="experience" className="desktopMenuListItem" smooth={true} offset={-80}>Experience</Link>
                    </div>
                    
                    {/* Wrap the button with Link and set to="contact" */}
                    <a href="https://drive.google.com/file/d/1Cun0_kn8VgSM13-HgbMvhx55L423u6mZ/view?usp=sharing" target="_blank" className="desktopMenuBtnLink">
            <button className="desktopMenuBtn">
                Resume
            </button>
        </a>
    </>
)}

            {/* Burger menu for mobile */}
            {isMobile && (
                <>
                    <img src={logo} alt="logo" className='logo' />
                    <Menu isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)} right>
                        {/* Link to the Intro section */}
                        <Link to="intro" className="menu-item" smooth={true} offset={-80} onClick={handleMenuToggle}>Home</Link>
                        {/* Link to the About section */}
                        <Link to="about" className="menu-item" smooth={true} offset={-80} onClick={handleMenuToggle}>About</Link>
                        {/* Link to the Projects section */}
                        <Link to="projects" className="menu-item" smooth={true} offset={-80} onClick={handleMenuToggle}>Projects</Link>
                        {/* Link to the Experience section */}
                        <Link to="experience" className="menu-item" smooth={true} offset={-80} onClick={handleMenuToggle}>Experience</Link>
                        {/* Button to Resume section */}
                        <Link to="contact" className="menu-item" smooth={true} offset={-80} onClick={handleMenuToggle}>Resume</Link>
                    </Menu>

                    {/* Burger menu toggle button */}
                    <button className="burger-menu-toggle" onClick={handleMenuToggle}>
                        <div className="burger-menu-bar" />
                        <div className="burger-menu-bar" />
                        <div className="burger-menu-bar" />
                    </button>
                </>
            )}
        </nav>
    );
};

export default Navbar;
