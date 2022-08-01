import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/MA.svg";
import styled from "styled-components";

import { 
    NavigationContainer, 
    NavigationLinks, 
    NavigationLogo,
    NavLinks
} from "./styles";

const Links = styled(Link)`
    padding: 20px;
    font-weight: 500;
    color: #292826;
    text-decoration: none;

    &:hover {
        border-bottom: #292826 dotted 3px;
    }
`;

const Navigation = () => {

    return (
        <Fragment>
            <NavigationContainer>
                <NavigationLogo to="/">
                    <Logo />
                </NavigationLogo>
                
                <NavigationLinks> 
                    <Links to={"/"}>HOME</Links>

                    <Links to={"/about"}>ABOUT ME</Links>

                    <Links to={"/skills"}>SKILLS</Links>

                    <Links to={"/projects"}>PROJECTS</Links>

                    <Links to={"/contact"}>CONTACT</Links>
                
                </NavigationLinks>
            </NavigationContainer>

            <Outlet />
        </Fragment>
    );
}

export default Navigation;