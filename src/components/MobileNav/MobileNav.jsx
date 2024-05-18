import React, { useState } from 'react';
import { AiOutlineMenuFold } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';
import "./MobileNav.css";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuClick = () => {
      setOpen(false);
    };

    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {
                        open ?
                            (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen} />) :
                            (<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)
                    }
                    <span className='mobile-nav-title'>MDM</span>
                </div>
                {
                    open && (
                        <div className="mobile-nav-menu">
                            <div className="nav-items">
                                <div className="nav-item">
                                    <div className="nav-link">
                                        <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            Home
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            About
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            Education
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            Tech Stack
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            Projects
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            Experience
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default MobileNav