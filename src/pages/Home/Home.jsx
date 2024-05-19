import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Mohd_Moazzam_CV.pdf";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";

const Home = () => {
    const [theme, setTheme] = useTheme();

    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
    }

    return (
        <>
            <div className="container-fluid home-container" id='home'>
                <div className="theme-btn" onClick={handleTheme}>
                    {
                        theme === "light" ? (<BsFillMoonStarsFill size={30} />) : (<BsFillSunFill size={30} />)
                    }
                </div>
                <div className="container home-content">
                        <h2>Hi 👋 I'm a</h2>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ['FullStack Developer!', 'Mern Stack Developer!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div className="home-buttons">
                            <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=123456789' rel='noreferrer' target='_blank'>
                                Hire Me
                            </a>
                            <a className='btn btn-cv' href={Resume} download="Mozzam_resume.pdf">Download CV</a>
                        </div>
             
                </div>
            </div>
        </>
    )
}

export default Home