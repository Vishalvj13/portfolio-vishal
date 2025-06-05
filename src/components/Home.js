import React from 'react';
import '../styles/Home.css';
import profileImg from '../assets/photo1.png';
import profileImg1 from '../assets/photo_primary.png';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Download, ArrowDownToLine } from 'lucide-react';
import awsPractitioner from '../assets/aws-practitioner.png';
import awsSAA from '../assets/aws-saa.png';
import awsDVA from '../assets/aws-dva.png';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from "react-icons/fa6";
import {SiCredly} from "react-icons/si";

const Home = () => {
    return (
        <section className="home" id="home">
            <Navbar />

            {/* Floating Background */}
            <ul className="blob-background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className="home-wrapper">
                <motion.img
                    src={profileImg1}
                    alt="Profile"
                    className="profile-img"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />
                <div className="home-content">
                    <motion.h1
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hi, I'm <span className="highlight">Vishal Junghare</span>
                        <br />
                        <span className="typewriter">
                            Software Developer,&nbsp;
                            <Typewriter
                                words={[
                                    'Cloud Enthusiast',
                                    'Tech Explorer 🚀',
                                ]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtext"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Behind every pixel, a purpose. Behind every function, a vision.
                        Let's build something extraordinary.
                    </motion.p>

                    {/* Certification Badges */}
                    <div className="certifications">
                        <a href="https://www.credly.com/badges/0b298bc1-6a33-45f2-9882-18abf4f931fc/public_url" target="_blank" rel="noopener noreferrer">
                            <img src={awsPractitioner} alt="AWS Cloud Practitioner" />
                        </a>
                        <a href="https://www.credly.com/badges/a3f78562-dc4d-4cfd-8ad6-353e1c2c7e18/public_url" target="_blank" rel="noopener noreferrer">
                            <img src={awsSAA} alt="AWS Solutions Architect Associate" />
                        </a>
                        <a href="https://www.credly.com/badges/3d8c0290-02a1-4998-b922-5c0b74e1b819/public_url" target="_blank" rel="noopener noreferrer">
                            <img src={awsDVA} alt="AWS Developer Associate" />
                        </a>
                    </div>


                    {/* Buttons */}
                    <motion.div
                        className="action-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <a
                            href="https://drive.google.com/uc?export=download&id=1jJIe0MokwrNYWJaNHVJUpaE5vkTJBFMO"
                            className="download-btn"
                            download
                        >
                            <Download size={20} className="btn-icon" /> Download CV
                        </a>
                        <div className="social-icons">
                            <a
                                href="https://github.com/Vishalvj13"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub style={{ color: '#181717' }}/>
                            </a>
                            <a
                                href="https://linkedin.com/in/vishal-junghare-vj"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin style={{ color: '#0A66C2' }}/>
                            </a>
                            <a
                                href="https://www.instagram.com/vishal_13_?igsh=MWc5eWdpdGFhanBpNw=="
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram style={{ color: '#E4405F' }}/>
                            </a>
                            <a
                                href="https://www.credly.com/users/vishal-junghare"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiCredly style={{ color: '#EA552A' }}/>
                            </a>
                        </div>
                    </motion.div>
                     {/*Scroll Down Indicator */}
                    <div className="scroll-down">
                        <ArrowDownToLine size={24} />
                        <span>Scroll Down</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
