import React, { Fragment } from "react";
import { Outlet } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/MA.svg"

import { 
    NavigationContainer, 
    NavigationLinks, 
    NavigationLogo,
    NavLinks
} from "./styles";

const Navigation = () => {

    return (
        <Fragment>
            <NavigationContainer>
                <NavigationLogo to="/">
                    <Logo />
                </NavigationLogo>
                
                <NavigationLinks>          
                    <NavLinks className="nav-links" to="/home">
                        HOME
                    </NavLinks>

                    <NavLinks className="nav-links" to="/about">
                        ABOUT ME
                    </NavLinks>
                    
                    <NavLinks className="nav-links" to="/skills">
                        SKILLS
                    </NavLinks>

                    <NavLinks className="nav-links" to="/projects">
                        PROJECTS
                    </NavLinks>

                    <NavLinks className="nav-links" to="/contact">
                        CONTACT
                    </NavLinks>
                </NavigationLinks>
            </NavigationContainer>

            <Outlet />
        </Fragment>
    );
}

export default Navigation;