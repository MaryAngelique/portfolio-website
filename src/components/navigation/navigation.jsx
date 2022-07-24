import React from "react";
import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/MA.svg"

import { 
    NavigationContainer,
} from "./styles";

const Navigation = () => {

    return (
        <NavigationContainer>
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
            
        </NavigationContainer>
    );
}

export default Navigation;