import React, { useState } from 'react';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcReadingEbook } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { SiWorkplace } from "react-icons/si";
import "./MobileNav.css";
import { Link } from 'react-scroll';

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
                                            <FcHome size={20} />
                                            Home
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcAbout size={20} />
                                            About
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcReadingEbook size={20} />
                                            Education
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcBiotech size={20} />
                                            Tech Stack
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <GoProjectSymlink size={20} />
                                            Projects
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <SiWorkplace size={20} />
                                            Experience
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                            <FcBusinessContact size={20} />
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