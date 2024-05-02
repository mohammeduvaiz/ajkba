import React from 'react'
import "./programs.css"
import RightArrow from "../../assets/rightArrow.png"
import { programsData } from '../../data/programData'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className='stroke-text'>YOUR PREMIERE</span>
                <span>BADMINTON</span>
                <span className='stroke-text'>COACHING DESTINATION</span>
            </div>
            <div className="programs-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        {/* <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="Right Arrow" />
                        </div> */}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Programs
