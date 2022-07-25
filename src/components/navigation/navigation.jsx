import React from "react";
import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/MA.svg"

import { 
    NavigationContainer, 
    NavigationLinks, 
    NavigationLogo,
} from "./styles";

const Navigation = () => {

    return (
        <NavigationContainer>
            <nav className="navigation-container">

                {/* Navigation Logo */}
                <NavigationLogo>
                    <Link to="/">
                        <Logo size={30}/>
                    </Link>
                </NavigationLogo>

                {/* Navigation List */}
                <NavigationLinks>
                    <Link className="navigation-links-item" to="/home">
                        HOME
                    </Link>

                    <Link className="navigation-links-item" to="/about">
                        ABOUT ME
                    </Link>

                    <Link className="navigation-links-item" to="/skills">
                        SKILLS
                    </Link>

                    <Link className="navigation-links-item" to="/projects">
                        PROJECTS
                    </Link>

                    <Link className="navigation-links-item" to="/contact">
                        CONTACT
                    </Link>
                </NavigationLinks>
            </nav>
            
        </NavigationContainer>
    );
}

export default Navigation;