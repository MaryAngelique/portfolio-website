import React from "react";

import { skillsData } from "./skills-data";

const Skills = () => {
    return(
        <div className="skills">
            <div className="skills-content">
                {skillsData.map((item, i) => (
                    <div key={i} className="skills-content-">
                        <h3 className="skills-content-category-text">
                            {item.type}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;