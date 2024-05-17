import React from 'react'
import "./Project.css";


const Project = () => {
    return (
        <>
            <div className="project" id='project'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Projects</h2>
                <hr />
                <p className='pb-3 text-center'>👉 here are my some recent projects</p>

                <div className="row justify-content-center align-items-center" id='ads'>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full stack</span>
                                <img src="https://assets.devfolio.co/hackathons/633065500193427091033d2cfc2621e6/projects/8e80723867854f33939a9dd0170f0927/48ef94bc-b0af-4c7e-b7bb-8875aafd6ee5.jpeg" alt="project1" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-details-badge">Node</span>
                                <span className="card-details-badge">React</span>
                                <span className="card-details-badge">Redux</span>
                                <span className="card-details-badge">Mongodb</span>
                            </div>

                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <p className="text-uppercase">Studynotion- An edtech(WA)</p>
                                </div>

                                <a href="#"className='ad-btn'>View</a>
                            </div>
                        </div>
                    </div>

                    {/* Second project */}

                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full stack</span>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ221LJ-Di7lMTdlFfLd1XxbqxVY9qO59FJwCCu2wtwEQ&s" alt="project1" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-details-badge">Node</span>
                                <span className="card-details-badge">Socket</span>
                                <span className="card-details-badge">React</span>
                                <span className="card-details-badge">Mongodb</span>
                            </div>

                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <p className="text-uppercase">BuzzChat- Messaging(WA)</p>
                                </div>
                                <a href="https://google.com" target='blank' className='ad-btn'>View</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Third project */}
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Backend</span>
                                <img src="https://media.licdn.com/dms/image/D560BAQEIF_UR1SqzOA/company-logo_200_200/0/1703313495850/subtrix_logo?e=2147483647&v=beta&t=D99KllOlo_-yoCSFTzxSgRPIe8QsDCdT0sC7nuCvE3Q" alt="project1" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-details-badge">Node</span>
                                <span className="card-details-badge">Express</span>
                                <span className="card-details-badge">Postgres</span>
                            </div>

                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <p className="text-uppercase">Subtrix- Blogging(WA)</p>
                                </div>
                                <a href="https://google.com" target='blank' className='ad-btn'>View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project