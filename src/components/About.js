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
                        Hey there! 👋 I'm <strong>Vishal Junghare</strong>, a <strong>Java Backend Developer & AWS Security Engineer</strong> with <strong>3+ years of experience</strong> building clean, scalable, and secure cloud applications.
                        <br />
                        I specialize in crafting efficient <strong><em>Microservices</em></strong> with <strong><em>Java</em></strong>, <strong><em>Spring Boot</em></strong>, and <strong><em>REST APIs</em></strong>, while designing automated <strong><em>Cloud Security</em></strong> and <strong><em>Governance</em></strong> solutions on <strong><em>AWS</em></strong>.
                        <br /><br />
                        My work revolves around securing enterprise cloud environments — from analyzing <strong><em>CrowdStrike</em></strong> threat reports and <strong><em>AWS Config</em></strong> findings to building <strong><em>Policy-as-Code</em></strong> frameworks with <strong><em>Stacklet</em></strong> (Cloud Custodian 💫). I love architecting remediation engines, automating compliance in <strong><em>Harness CI/CD</em></strong> pipelines, and making the cloud a safer, smarter place.
                        <br /><br />
                        From <strong><em>Maven</em></strong> to <strong><em>Docker</em></strong>, <strong><em>Git</em></strong> to <strong><em>Jenkins</em></strong>, and a sprinkle of <strong><em>AWS magic</em></strong> (think <strong><em>IAM</em></strong>, <strong><em>CloudTrail</em></strong>, and <strong><em>Governance Policies</em></strong>) — these are my daily tools of the trade. Writing clean, maintainable, and secure code is my craft. Bonus points if it works on the first try (it usually doesn’t, but I act surprised 😄).
                        <br /><br />
                        <strong>Outside work</strong>, I’m a <strong>Cricket Enthusiast 🏏</strong>, <strong>Wanderluster 🌍</strong>, and <strong>Foodie 🍕</strong> on a quest for the perfect bite.
                        <br />
                        Give me <strong>spontaneous road trips 🛣️</strong>, <strong>binge-worthy TV shows 📺</strong>, and a never-ending stream of <strong>chai ☕️</strong> — and you’ve got the perfect mix of <strong>code</strong>, <strong>cloud</strong>, and <strong>chaos</strong>.
                        <br />
                        <strong>Fun fact:</strong> I have more <strong>browser tabs</strong> open than <strong>AWS regions</strong> 🤫.
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
