import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"

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
                    <ul className="navigation">
                        <li><Link to={"/home"}>HOME</Link></li>

                        <li> <Link to={"/about"}>ABOUT ME</Link></li>

                        <li><Link to={"/skills"}>SKILLS</Link></li>

                        <li><Link to={"/projects"}>PROJECTS</Link></li>

                        <li><Link to={"/contact"}>CONTACT</Link></li>
                    </ul>         
                
                </NavigationLinks>
            </NavigationContainer>

            <Outlet />
        </Fragment>
    );
}

export default Navigation;