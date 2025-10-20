import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiSpring,
  SiApachemaven,
  SiJira,
  SiPostman,
  SiDocker,
  SiGit,
  SiGithub,
  SiJenkins,
  SiJirasoftware,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { VscSourceControl } from "react-icons/vsc";
import { FaProjectDiagram, FaCubes, FaSyncAlt, FaAws } from "react-icons/fa";

const skillsData = {
  Languages: [
    {
      name: "Java",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Java"
          style={{ width: 60 }}
        />
      ),
    },
    { name: "HTML 5", icon: <SiHtml5 size={60} color="#e34f26" /> },
    { name: "CSS 3", icon: <SiCss3 size={60} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={60} color="#f7df1e" /> },
    { name: "ReactJS", icon: <SiReact size={60} color="#61DBFB" /> },
  ],

  Databases: [
    { name: "MySQL", icon: <SiMysql size={60} color="#00758f" /> },
    { name: "NoSQL (MongoDB)", icon: <SiMongodb size={60} color="#47A248" /> },
  ],

  Frameworks: [
    { name: "Spring Boot", icon: <SiSpringboot size={60} color="#6db33f" /> },
    { name: "Spring Framework", icon: <SiSpring size={60} color="#6db33f" /> },
    {
      name: "Spring MVC",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
          alt="Spring MVC"
          style={{ width: 60 }}
        />
      ),
    },
    {
      name: "Hibernate",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg"
          alt="Hibernate"
          style={{ width: 60 }}
        />
      ),
    },
    { name: "RESTful APIs", icon: <MdApi size={60} color="#4B5563" /> },
    { name: "SOAP", icon: <MdApi size={60} color="#0078D4" /> },
  ],

  Tools: [
    { name: "Maven", icon: <SiApachemaven size={60} color="#C71A36" /> },
    { name: "Jira", icon: <SiJira size={60} color="#0052CC" /> },
    { name: "Perforce", icon: <VscSourceControl size={60} color="#005CAB" /> },
    { name: "Postman", icon: <SiPostman size={60} color="#FF6C37" /> },
  ],

  DevOps: [
    { name: "AWS", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "Docker", icon: <SiDocker size={60} color="#0db7ed" /> },
    { name: "Git", icon: <SiGit size={60} color="#f1502f" /> },
    { name: "GitHub", icon: <SiGithub size={60} color="#181717" /> },
    { name: "Jenkins", icon: <SiJenkins size={60} color="#d33833" /> },
  ],

  Cloud Security & Compliance: [
    { name: "AWS Security Hub", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "AWS Config", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "AWS CloudTrail", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "IAM", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "VPC & Security Groups", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "S3 Bucket Policies", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "Stacklet (Cloud Custodian)", icon: <FaAws size={60} color="#FF9900" /> },
    { name: "CrowdStrike Analysis", icon: <FaAws size={60} color="#FF9900" /> },
  ],

  Practices: [
    { name: "OOP", icon: <FaProjectDiagram size={60} color="#8A2BE2" /> },
    { name: "SOLID", icon: <FaCubes size={60} color="#4B0082" /> },
    { name: "SDLC", icon: <FaSyncAlt size={60} color="#5A7D9A" /> },
    { name: "Agile / Scrum", icon: <SiJirasoftware size={60} color="#0052CC" /> },
  ],
};

export default skillsData;
