import { hover } from "@testing-library/user-event/dist/hover";
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

    function handleFilter(currentId) {
        setfilterState(currentId);
    }

    function handleHover(index) {
        sethoverState(index);
    }

    const filterItems =
        filterState === 1
            ? projectsData
            : projectsData.filter((item) => item.id === filterState);
 
    return(
        <div className="projects-content">
            <ul className="projects-content-filter">
                {filterData.map((item) => (
                    <li
                        className={item.filterId === filterState ? "active" : ""}
                        onClick={() => handleFilter(item.filterId)}
                        key={item.filterId}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>

            <div className="projects-content">
                {filterItems.map((item, index) => (
                    <div
                        className="projects-content-project"
                        key={`cardItem${item.name.trim()}`}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        <div className="projects-content-project-image">
                            <a>
                                <img alt="data" src={item.image} />
                            </a>
                        </div>

                        <div className="hover">
                            {index === hoverState && (
                                <div>
                                    <p>{item.name}</p>
                                    <button>Go to Project</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
      </div>
    );
}

export default Projects;