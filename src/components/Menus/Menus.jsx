import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from "react-icons/fc";
import { Link } from 'react-scroll';
import "./Menus.css";

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
                                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100} className='judge0' >
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='about' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                        
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='education' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='project' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
                                        Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} className='judge0'>
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