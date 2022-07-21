import React, { useState } from "react";

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
    const [filterState, setfilterState] = useState(1);
    const [hoverState, sethoverState] = useState(null);

    return(
        <div>
            <h1>Contact</h1>
            <h1>Let's chat</h1>
        </div>
    );
}

export default Projects;