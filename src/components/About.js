import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';
import DynamicTerminal from "./DynamicTerminal";
import { User } from "lucide-react";

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-wrapper">
                <h2 className="about-title">
                    <User size={30} className="iconA" />
                    About Me
                </h2>
                <div className="title-underline"></div>
                <br/><br/>
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* About Text */}
                     <p className="about-text">
                        Hey there! 👋 I'm <strong>Vishal Junghare</strong>, a <strong>Java Backend Developer & AWS Security Engineer</strong> with <strong>3+ years of experience</strong> building clean, scalable, and secure cloud applications using <strong><em>Java</em></strong>, <strong><em>Spring Boot</em></strong>, and <strong><em>REST APIs</em></strong>.
                        <br />
                        I specialize in crafting efficient <strong><em>Microservices</em></strong> and ensuring <strong><em>cloud environments</em></strong> stay compliant and secure on <strong><em>AWS</em></strong>. From analyzing <strong><em>CrowdStrike</em></strong> threat reports to writing <strong><em>Policy-as-Code</em></strong> with <strong><em>Stacklet</em></strong> (based on Cloud Custodian 💫), I love solving complex security and architecture challenges that make systems both smarter and safer.
                        <br /><br />
                        From <strong><em>Maven</em></strong> to <strong><em>Docker</em></strong>, <strong><em>Git</em></strong> to <strong><em>Jenkins</em></strong>, and a healthy dose of <strong><em>AWS magic</em></strong> (think <strong><em>IAM</em></strong>, <strong><em>VPCs</em></strong>, and <strong><em>Governance Policies</em></strong>) — these are my daily tools of the trade. Writing clean, maintainable, and secure code is my craft. Bonus points if it works on the first try (it usually doesn’t, but I act surprised 😄).
                        <br /><br />
                        <strong>Outside work</strong>, I'm a <strong>Cricket Enthusiast 🏏</strong> who loves smashing sixes, a <strong>Wanderluster 🌍</strong> exploring new destinations, and a <strong>Foodie 🍕</strong> on the hunt for the next great bite.
                        <br />
                        Give me <strong>spontaneous road trips 🛣️</strong>, <strong>binge-worthy TV shows 📺</strong>, and an endless supply of <strong>chai ☕️</strong>, and you’ve got the perfect blend of <strong>code</strong>, <strong>cloud</strong>, and <strong>chaos</strong>.
                        <br />
                        <strong>Fun fact:</strong> I have more browser tabs open than AWS regions 🤫.
                    </p>

                    {/* My Coding Mantra Terminal Box */}
                    <div className="mt-4">
                        {/*<h3 className="text-2xl font-semibold mb-3">💻 My Coding Mantra</h3>*/}
                        <DynamicTerminal />
                    </div>
                </motion.div>
            </div>
            </div>
        </section>
    );
};

export default About;
