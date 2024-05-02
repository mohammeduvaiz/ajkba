import React from "react";
import image1 from "../../assets/lindan.jpg";
import image2 from "../../assets/PVSindhu.jpg";
import image3 from "../../assets/lcw.jpeg";
import image4 from "../../assets/satwik.webp";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png'
import yonex from '../../assets/yonex.png'
import tick from "../../assets/tick.png";
import "./Reason.css";
const Reasons = () => {
    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={image3} alt="" />
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                {/* <img src={image4} alt="" /> */}
            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className="stroke-text">Why </span>
                    <span>choose us?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>8 expert coachs</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Comprehensive Training Programs</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Competitive Opportunities</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Track Record of Success</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Reliable sponsors</span>
                    </div>
                </div>
                <span style={{ color: "var(--gray)", fontWeight: "normal" }}>OUR SPONSORS</span>
                <div className="partners">
                    {/* <img src={nb} alt="" />
                    <img src={adidas} alt="" /> */}
                    <img src={yonex} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Reasons;
