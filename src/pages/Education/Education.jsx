import React from 'react';
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md"
import { GiDiploma } from "react-icons/gi";

const Education = () => {
    return (
        <>
            <div className="education" id='education'>
                <div>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>education</h2>
                    <hr />

                    <VerticalTimeline lineColor='#138781'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(128, 128, 128, 0.1)', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(128, 128, 128, 0.1)' }}
                            date="2019 - 2022"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={< MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">B.Tech</h3>
                            <h4 className="vertical-timeline-element-subtitle">UTU Dehradun, IN</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(128, 128, 128, 0.1)', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(128, 128, 128, 0.1)' }}
                            date="2015 - 2018"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={< GiDiploma />}
                        >
                            <h3 className="vertical-timeline-element-title">Diploma(Polytechnic)</h3>
                            <h4 className="vertical-timeline-element-subtitle">UBTER Roorkee, IN</h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

            </div>
        </>
    )
}

export default Education