import React from "react";
import Navigation from "../navigation/navigation";

import { 
    SkillsContainer, 
    SkillsContentContainer, 
    SkillsStyles,
    Title,
} from "./style";

const Skills = () => {
    return(
        <SkillsContainer>
            <Navigation/>
            <Title>Skills</Title>

            <SkillsContentContainer>
                {/* FrontEnd Skills */}
                <SkillsStyles>
                    <ul className="skills-container">
                        <h4>FrontEnd Skills</h4>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React JS</li>
                        <li>Redux</li>
                        <li>Context API</li>
                        <li>Axios</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>DOM Manipulation</li>
                        <li>JSON</li>
                        <li>Ajax</li>
                        <li>JQuery</li>
                        <li>Responsive Web Design</li>
                        <li>TypeScript</li>
                    </ul>
                </SkillsStyles>

                {/* BackEnd Skills */}
                <SkillsStyles>
                    <ul className="skills-container">
                        <h4>BackEnd Skills</h4>
                        <li>Node Js</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>SQLite Studio</li>
                        <li>Express JS</li>
                        <li>Knex JS</li>
                        <li>Git CLI</li>
                        <li>Heroku CLI</li>
                    </ul>
                </SkillsStyles>

                {/* Deployment Skills */}
                <SkillsStyles>
                    <ul className="skills-container">
                        <h4>Deployment Skills</h4>
                        <li>Heroku</li>
                        <li>Vercel</li>
                        <li>Netlify</li>
                    </ul>
                </SkillsStyles>

                {/* Additional Skills */}
                <SkillsStyles>
                    <ul className="skills-container">
                        <h4>Agile Project Management</h4>
                        <li>Algorithms</li>
                        <li>Architecture</li>
                        <li>Debugging</li>
                        <li>Deployment</li>
                        <li>Troubleshooting</li>
                        <li>Unit Testing</li>
                        <li>Integration Testing</li>
                        <li>Visual Studio Code</li>
                        <li>CodePen</li>
                        <li>Figma</li>
                        <li>Canva</li>
                    </ul>
                </SkillsStyles>
            </SkillsContentContainer>
        </SkillsContainer>
    );
}

export default Skills;