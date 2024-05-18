import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Techstacks } from '../../utils/TechstackList';
import "./Techstack.css";

const Techstack = () => {
    return (
        <>
            <div className="techstack" id='tech-stack'>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technlogies Stack</h2>
                    <hr />
                    <p className='pb-3 text-center'>👉 including programming languages, frameworks, databases, front-end and back-end tools and APIs</p>
                <div className="row">
                    {
                        Techstacks.map((ts) => (
                            <div key={ts._id} className="col-md-3" >
                                <Fade direction='left'>
                                    <div className="card m-2">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="media d-flex justify-content-center align-items-center">
                                                    <div className="align-self-center">
                                                        <ts.icon className='tech-icon' />
                                                    </div>
                                                    <div className="media-body">
                                                        <h5>{ts.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Techstack;