import React from 'react';
import '../styles/Education.css';
import { GraduationCap } from 'lucide-react';

const educationData = [
    {
        degree: 'PG-Diploma',
        fullDegree: 'Post Graduation Diploma in Advanced Computing (PG-DAC), Information Technology',
        institution: 'SunBeam Institute of Information Technology, Pune-Karad',
        year: '2021 - 2022',
        grade: 'Percentage: 74%',
    },
    {
        degree: 'Graduation',
        fullDegree: 'Bachelor of Engineering',
        institution: 'St. Vincent Pallotti College of Engineering & Technology, Nagpur',
        year: '2015 - 2019',
        grade: 'Percentage: 77.7%',
    },
    {
        degree: 'HSC',
        fullDegree: 'Higher Secondary Certificate',
        institution: 'Maharashtra State Board of Secondary and Higher Secondary Education',
        year: '2014 - 2015',
        grade: 'Percentage: 76.31%',
    },
    {
        degree: 'SSC',
        fullDegree: 'Secondary School Certificate',
        institution: 'Maharashtra State Board of Secondary and Higher Secondary Education',
        year: '2013 - 2014',
        grade: 'Percentage: 84.6%',
    },
];

const Education = () => {
    return (
        <section className="education-section" id="education">
            <div className="education-container">
                <h2 className="education-title">
                    <GraduationCap size={30} className="iconEd" />
                    Education
                </h2>
                <div className="title-underline"></div>
                <div className="education-horizontal-stack">
                    {educationData.map((edu, index) => (
                        <div className="edu-flip-card" key={index}>
                            <div className="edu-flip-inner">
                                <div className="edu-front">
                                    <h3>{edu.degree}</h3>
                                </div>
                                <div className="edu-back">
                                    <h3>{edu.fullDegree}</h3>
                                    <div className="institution">{edu.institution}</div>
                                    <div className="year">{edu.year}</div>
                                    <div className="grade">{edu.grade}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default Education;