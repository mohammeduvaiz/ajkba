import React from 'react'
import './Hero.css';
import Header from './header/Header';
import headCoach from "../assets/headcoach.webp"
import hero_image from '.././assets/ajk.png';
import hero_back from ".././assets/hero_image_back.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion"
import { Link } from "react-scroll";

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur">
            </div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best">
                    <motion.div
                        initial={{ left: mobile ? "178px" : '238px' }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>the best badminton academy in  Kerala</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span >WHERE </span>
                        <span className="stroke-text">CHAMPIONS</span>
                    </div>
                    <div>
                        <span>ARE MADE !</span>
                    </div>
                    <div>
                        <span>
                            AJKBA: Your premier destination for badminton excellence. Elevate your game with expert coaching, state-of-the-art facilities, and a supportive
                            community dedicated to unlocking your full potential.
                        </span>
                    </div>
                </div>
                {/* Fiqurers */}
                <div className="figures">
                    <div>
                        <span>4</span>
                        <span>NATIONAL MEDALS</span>
                    </div>
                    <div>
                        <span><NumberCounter end={40} start={20} delay={4} postFix="+" /></span>
                        <span>STATE MEDALS</span>
                    </div>
                    <div>
                        <span>  <NumberCounter end={60} start={40} delay={4} postFix="+" /></span>
                        <span>DISTRICT MEDALS</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={230} start={100} delay={4} postFix="+" />
                        </span>
                        <span>ALL KERALA TOURNAMENT</span>
                    </div>

                </div>
                {/* hero buttons  */}
                {/* <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div> */}
            </div>

            <div className="right-h">
                <Link className="btn"
                    to="contact"
                    spy={true}
                    smooth={true}
                >
                    Join now
                </Link>
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={headCoach} alt="" />
                    <span>Head Coach</span>
                    <span>Akash JK</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-img' />
                <motion.img
                    initial={{ right: mobile ? "11rem" : '11rem' }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    className="hero-back"
                    src={hero_back}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Hero