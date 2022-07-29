import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import styled from "styled-components";

import CoderHeroes from "./assets/coderheroes.png";
import Todo from "./assets/todo-app.png"
import Potluck from "./assets/potluck-planner.png"
import Market from "./assets/african-marketplace.png"
import Speak from "./assets/speak-your-number.png";
import Monsta from "./assets/MonstaDex.png";

import {
    ProjectsContainer,
    ProjectStyles,
} from "./styles";

const List = styled.div`
    display: inline-start;
    text-decoration: none;
    color: #f9d342;
    list-style: none;
    line-height: 1.6rem;
    
    img {
        width: 250px;
        height: 250px;
    }
`;

const Projects = () => {

    return(
        <ProjectsContainer>
            <Navigation/>

            <ProjectsContainer>
                <ul className="project-list">
                    <ProjectStyles>
                        <List>
                            <h3>CoderHeroes</h3>
                            <img src={CoderHeroes} alt="" className="image"/>
                        </List>
                    </ProjectStyles>

                    <ProjectStyles>
                        <List>
                            <h3>Todo App</h3>
                            <img src={Todo} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                     
                    <ProjectStyles>
                        <List>
                            <h3>PotLuck Planner</h3>
                            <img src={Potluck} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                    <ProjectStyles>
                        <List>
                            <h3>African Marketplace</h3>
                            <img src={Market} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                    <ProjectStyles>
                        <List>
                            <h3>Speak Your Number <br/> (Speech Number <br/> Guessing Game)</h3>
                            <img src={Speak} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                    <ProjectStyles>
                        <List>
                            <h3>MonstaDex</h3>
                            <img src={Monsta} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                </ul>
            </ProjectsContainer>
      </ProjectsContainer>
    );
}

export default Projects;