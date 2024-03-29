import React from "react";
import Fade from "react-reveal/Fade";

const Resume = ({ data }) => {
    if (data) {
        var skillMessage = data.skill_message;
        var education = data.education.map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });
        var work = data.work.map(function (work) {
            return (
                <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span>{" "}
                        <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                    <p>{work.city}</p>
                </div>
            );
        });
        var skills = data.skills.map(function (skills) {
            var className = "bar-expand " + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span
                        style={{ width: skills.level }}
                        className={className}
                    ></span>
                    <em>{skills.name}</em>
                </li>
            );
        });
        var interest = data.interest.map(function (interest) {
            return <li key={interest.name}>{interest.name}</li>;
        });
    }

    return (
        <section id="resume">
            <Fade bottom cascade>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{education}</div>
                        </div>
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{skillMessage}</p>

                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Interest</span>
                        </h1>
                    </div>

                    <div className="row interest">
                        <ul className="columns header-col">
                            <h5>{interest}</h5>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{work}</div>
                </div>
            </Fade>
        </section>
    );
};

export default Resume;
