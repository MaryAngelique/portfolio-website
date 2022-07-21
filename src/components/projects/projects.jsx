import React from "react";

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
        projectId: 2,
        name: "Ecommerce",
        image: "",
        link: "",
    },
    {
        projectId: 3,
        name: "Notes App",
        link: "",
        image: "",
    },
    {
        projectId: 2,
        name: "Supplier Design",
        image: "",
        link: "",
    },
    {
        projectId: 2,
        name: "Todo App",
        image: "",
        link: "",
    },
    {
        projectId: 3,
        name: "Shopping cart design",
        image: "",
        link: "",
    },
];

const Projects = () => {
    return(
        <div>
            <h1>Contact</h1>
            <h1>Let's chat</h1>
        </div>
    );
}

export default Projects;