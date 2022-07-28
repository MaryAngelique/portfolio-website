import React, { useState } from "react";
import Navigation from "../navigation/navigation";

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
                            <img src="" alt=""/>
                        </li>
                        <li>
                            <h3>CoderHeroes</h3>
                            <img src="" alt=""/>
                        </li>
                        <li>
                            <h3>CoderHeroes</h3>
                            <img src="" alt=""/>
                        </li>
                        <li>
                            <h3>CoderHeroes</h3>
                            <img src="" alt=""/>
                        </li>
                        <li>
                            <h3>CoderHeroes</h3>
                            <img src="" alt=""/>
                        </li>
                        <li>
                            <h3>CoderHeroes</h3>
                            <img src="" alt=""/>
                        </li>
                        
                    </ul>
                </div>
            </div>
      </ProjectsContainer>
    );
}

export default Projects;