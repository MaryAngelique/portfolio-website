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

// Filter Projects Data
const filterData = [
    {
        filterId: 1,
        label: "All",
    },
    {
        filterId: 2,
        label: "FrontEnd",
    },
    {
        filterId: 3,
        label: "BackEnd",
    },
];

// Projects Data
const projectsData = [
    {
        projectId: 1,
        name: "Halo Clothing",
        image: "",
        link: "",
    },
    {
        projectId: 1,
        name: "Todo App",
        link: "",
        image: "",
    },
    {
        projectId: 2,
        name: "African Marketplace",
        image: "",
        link: "",
    },
    {
        projectId: 3,
        name: "Potluck Planner",
        image: "",
        link: "",
    },
    {
        projectId: 2,
        name: "CoderHeroes",
        image: "",
        link: "",
    },
];

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
                        <li>
                            <h3>CoderHeroes</h3>
                            <img src="" alt="" className="image"/>
                        </li>
                    </ul>
                </div>
            </div>
      </ProjectsContainer>
    );
}

export default Projects;