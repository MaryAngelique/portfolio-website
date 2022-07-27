import React from "react";
import Navigation from "../navigation/navigation";

import { skillsData } from "./skills-data";

import { 
    SkillsContainer, 
    SkillsContentContainer, 
    SkillsContentText,
} from "./style";

const Skills = () => {
    return(
        <SkillsContainer>
            <Navigation/>
            <SkillsContentContainer>
                {skillsData.map((item, i) => (
                    <SkillsContentText key={i}>
                        <h3 className="skills-content-text">
                            {item.type}
                        </h3>
                    </SkillsContentText>
                ))}
            </SkillsContentContainer>
        </SkillsContainer>
    );
}

export default Skills;