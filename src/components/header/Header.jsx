import React, { useState } from 'react'
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";
import './Header.css'
function Header() {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header" id="header">
            {/* <img src={Logo} alt="" className="logo" /> */}
            <h1 className='logo'>AJKBA</h1>
            {(menuOpened === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img
                        src={Bars}
                        alt="bars"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="programs"
                            spy={true}
                            smooth={true}
                        >
                            Vision
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="reasons"
                            spy={true}
                            smooth={true}
                        >
                            Winners
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="plans"
                            spy={true}
                            smooth={true}
                        >
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="testimonials"
                            spy={true}
                            smooth={true}
                        >
                            Testimonials
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="contact"
                            spy={true}
                            smooth={true}
                        >
                            Contact us
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            to="about"
                            spy={true}
                            smooth={true}
                        >
                            About us
                        </Link>
                    </li> */}
                </ul>
            )}
        </div>
    )
}

export default Header