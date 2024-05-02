import React from 'react'
import "./Winners.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { winnersData } from "../../data/winnersData";
import { useState } from "react";
import { motion } from "framer-motion";

const Winners = () => {
    const [selected, setSelected] = useState(0);
    const tLength = winnersData.length;
    const transition = { type: "spring", duration: 1 };
    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Winners</span>
                <span className="stroke-text">Meet Our</span>
                <span>Winners</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {winnersData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {winnersData[selected].name}
                    </span>{" "}
                    - {winnersData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={winnersData[selected].image}
                    alt=""
                />
                <div className="arrows">
                    <img
                        src={leftArrow}
                        alt=""
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                    />{" "}
                    <img
                        src={rightArrow}
                        alt=""
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Winners