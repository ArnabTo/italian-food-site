import { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Logo from "../assets/logo.png"
import HomeFood from "../assets/home_nodules.png"
import HomeFood2 from "../assets/f1.png"
import DownArrow from "../assets/12-arrow-down-solid.gif"
export default function Home() {

    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <div className="home_Section mb-5">
                <div className="home_Container">
                    <div className="nav_Bar">
                        <div className="nav_Container">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0, scale: 1.2 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="navbar-brand">
                                <a href="#"><img className="nav_Logo" src={Logo} /></a>
                            </motion.div>
                            <div className="nav-item">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0, scale: 1.2 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="nav-Text">
                                    <p>
                                        Eexpress Delivery
                                        <h4>01987564546 </h4>
                                    </p>
                                    <img className="dropDown" onClick={() => setShowNav(!showNav)} src={DownArrow} alt="loading" />
                                </motion.div>
                                <ul
                                    className="nav" id={showNav ? "show_Nav" : "ul.nav"}>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            Menu
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            Our Story
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="home_Content">
                        <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100 }}
                        className="home_ContentText">
                            <h3>are you hungry?</h3>
                            <h1>DONT WAIT</h1>
                            <h4>LETS START TO ORDER FOOD NOW</h4>
                            <div className="strateLine"></div>
                            <motion.span
                            initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100 }}>
                                <p>THIS MONDAY<br />
                                    HAPPY HOURS<br />
                                    1+1=3
                                </p>

                            </motion.span>

                        </motion.div>
                        <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100 }}
                        className="home_ContentImg">
                            <img className="img-fluid d-none d-md-block home_Back" src={HomeFood} />
                            <img className="homeFood2" src={HomeFood2} />
                        </motion.div>

                    </div>
                    <img className="homeFood2 img-fluid" src={HomeFood2} />
                </div>
            </div>


        </>
    )
}