import React from 'react';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from "react-icons/fc";
import { SiWorkplace } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { Link } from 'react-scroll';
import "./Menus.css";
import { Zoom, Fade } from "react-awesome-reveal";

const Menus = ({ toggle }) => {


    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="profile pic" />
                        </div>
                    </Zoom>
                    <Fade direction="left">
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        <FcHome size={20} />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='about' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        <FcAbout size={20} />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='education' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        <FcReadingEbook size={20} />
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        <FcBiotech size={20} />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='project' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        <GoProjectSymlink size={20} />
                                        Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        <SiWorkplace size={20} />
                                        Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        <FcBusinessContact size={20} />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>

            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                    <FcHome size={30} title='home' />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                    <FcAbout size={30} />

                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='education' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                    <FcReadingEbook size={30} />

                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                    <FcBiotech size={30} />

                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='project' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                    <FcVideoProjector size={30} />

                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                    <FcPortraitMode size={30} />

                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                    <FcBusinessContact size={30} />

                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Menus;