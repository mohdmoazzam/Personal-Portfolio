import React from 'react'
import "./Experience.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
    return (
        <>
            <div className="work" id='experience'>
                <div className="work-exp">
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>experience</h2>
                    <hr />
                    <VerticalTimeline lineColor='#1e1e2c'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #1e1e2c' }}
                            date="2022 - Present"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={< MdOutlineWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Associate Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Appsierra, IN</h4>
                            <p>Working as a Backend Developer</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                </div>
            </div>
        </>
    )
}

export default Experience