import React from "react";
import Spline from "@splinetool/react-spline";
import Fade from "react-reveal/Fade";

const Portfolio = ({ data }) => {
    return (
        <section id="portfolio">
            <div className="row">
                <div
                    className="twelve columns collapsed"
                    style={{ height: "20rem" }}
                >
                    <Spline scene="https://prod.spline.design/2Xqq0daHLRhWRJw3/scene.splinecode" />
                </div>
            </div>
            <div id="portfolio-wrapper">
                <Fade bottom cascade>
                    {data &&
                        data.projects.map((projects) => (
                            <div
                                key={projects.title}
                                className="columns portfolio-item"
                            >
                                <a
                                    key={projects.title}
                                    href={projects.url}
                                    title={projects.title}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="item-wrap">
                                        <img
                                            alt={projects.title}
                                            src={
                                                "images/portfolio/" +
                                                projects.image
                                            }
                                        />
                                        <div className="portfolio-box">
                                            <div className="portfolio-item-meta">
                                                <h5>{projects.title}</h5>
                                                <p>{projects.description}</p>
                                                <p>
                                                    <i>{projects.category}</i>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                </Fade>
            </div>
        </section>
    );
};

export default Portfolio;
