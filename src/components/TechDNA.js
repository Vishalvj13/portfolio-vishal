// src/components/TechDNA.js
import React from 'react';
import { FaReact, FaAws, FaDocker, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si';
import "../styles/TechDNA.css";

const techIcons = [
    <FaReact title="React" />,
    <FaAws title="AWS" />,
    <SiMongodb title="MongoDB" />,
    <FaDocker title="Docker" />,
    <FaNodeJs title="Node.js" />,
    <SiJavascript title="JavaScript" />,
    <SiTypescript title="TypeScript" />,
    <SiNextdotjs title="Next.js" />,
    <FaGithub title="GitHub" />,
    <FaDatabase title="SQL/NoSQL" />
];

const TechDNA = () => {
    return (
        <div className="tech-dna-container">
            <div className="tech-dna-strip">
                {techIcons.concat(techIcons).map((icon, index) => (
                    <div className="dna-icon" key={index}>
                        {icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechDNA;
