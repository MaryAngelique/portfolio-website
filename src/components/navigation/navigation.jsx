import React, { Fragment } from "react";
import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/MA.svg"

const Navigation = () => {

    return (
        <Fragment>
            <nav className="navigation-container">

                {/* Navigation Logo */}
                <div className="navigation-logo">
                    <Link to={"/"} className="navigation-logo-container">
                        <Logo />
                    </Link>
                </div>

                {/* Navigation List */}
                <div className="navigation-links">
                    <Link className="navigation-links-item">
                        HOME
                    </Link>

                    <Link className="navigation-links-item">
                        ABOUT ME
                    </Link>

                    <Link className="navigation-links-item">
                        SKILLS
                    </Link>

                    <Link className="navigation-links-item">
                        PROJECTS
                    </Link>

                    <Link className="navigation-links-item">
                        CONTACT
                    </Link>
                </div>
            </nav>
            
        </Fragment>
    );
}

export default Navigation;