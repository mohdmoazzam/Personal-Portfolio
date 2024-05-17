import React from 'react'
import "./about.css";
import { Bounce } from "react-awesome-reveal";

const About = () => {
    return (
        <>
            <Bounce>
                <div className="about" id='about'>
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="About_pic" />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About me</h1>
                            <p>
                                Hi, I'm Mohd Moazzam, a dedicated and passionate Full Stack Developer
                                with 1.6 years of professional experience in developing robust,
                                scalable, and user-friendly web applications.
                                My expertise lies in both front-end and back-end technologies,
                                allowing me to create seamless and efficient solutions
                                from concept to deployment.
                            </p>
                        </div>
                    </div>
                </div>
            </Bounce>
        </>
    )
}

export default About