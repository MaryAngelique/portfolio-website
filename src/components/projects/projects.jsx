import React, { useState } from "react";
import Navigation from "../navigation/navigation";

import CoderHeroes from "./assets/coderheroes.png";
import Todo from "./assets/todo-app.png"
import Potluck from "./assets/potluck-planner.png"
import Market from "./assets/african-marketplace.png"
import Speak from "./assets/speak-your-number.png"

import {
    ProjectsContainer,
    ProjectsContent
} from "./styles";

const Projects = () => {

    return(
        <ProjectsContainer>
            <Navigation/>

            <div className="projects-container">
                <div className="frontend-projects">
                    <ul className="project-list">
                        <li>
                            <h3>CoderHeroes</h3>
                            <img src={CoderHeroes} alt="" className="image"/>
                        </li>
                        <li>
                            <h3>Todo App</h3>
                            <img src={Todo} alt="" className="image"/>
                        </li>
                        <li>
                            <h3>PotLuck Planner</h3>
                            <img src={Potluck} alt="" className="image"/>
                        </li>
                        <li>
                            <h3>African Marketplace</h3>
                            <img src={Market} alt="" className="image"/>
                        </li>
                        <li>
                            <h3>Speak Your Number - Speech Number Guessing Game</h3>
                            <img src={Speak} alt="" className="image"/>
                        </li>
                </div>
            </div>
      </ProjectsContainer>
    );
}

export default Projects;