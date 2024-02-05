import React from "react"
import Nithish from "./assets/profile.png"

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Nithish</span>
            <span className="d-none d-lg-block"><img className="Nithish"
                    src={Nithish}
                    alt=""/></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Projects</a></li> */}
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                </li>
            </ul>
        </div>
    </nav>

);

export default NavBar;
