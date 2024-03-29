import React from "react";
import Spline from "@splinetool/react-spline";
import Fade from "react-reveal/Fade";

const About = ({ data }) => {
    if (data) {
        var name = data.fullName;
        var profilepic = "images/" + data.image;
        var bio = data.bio;
        var city = data.address.city;
        var state = data.address.state;
        var zip = data.address.zip;
        var email = data.email;
        var resumeDownload = data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <Fade bottom cascade>
                    <div
                        className="three columns"
                        style={{
                            height: "25rem",
                            width: "25rem",
                            borderRadius: "5rem",
                        }}
                    >
                        <Spline scene="https://prod.spline.design/kIEIs80503dFRWwS/scene.splinecode" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span>
                                    <br />
                                    <span>
                                        {city} {state}, {zip}
                                    </span>
                                    <br />

                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a
                                        href={resumeDownload}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button"
                                    >
                                        <i className="fa fa-download"></i>
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default About;
