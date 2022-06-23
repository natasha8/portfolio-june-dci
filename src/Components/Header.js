import React from "react";
import Spline from "@splinetool/react-spline";

const Header = ({ data }) => {
    if (data) {
        var networks = data.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url} target="_blank" rel="noreferrer">
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });
    }

    return (
        <header id="home">
            <nav id="nav-wrap">
                <a
                    className="mobile-btn"
                    href="#nav-wrap"
                    title="Show navigation"
                >
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <Spline
                        scene="https://prod.spline.design/rJqjWzFNitivzq2e/scene.splinecode"
                        className="canva-big"
                    />

                    <ul className="social">{networks}</ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i
                        className="icon-down-circle"
                        style={{ color: "purple" }}
                    ></i>
                </a>
            </p>
        </header>
    );
};

export default Header;
