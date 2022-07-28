import React from "react";
import Navigation from "../navigation/navigation";
import styled from "styled-components";

import { 
    SkillsContainer, 
    SkillsContentContainer, 
    SkillsStyles,
    Title,
} from "./style";

const List = styled.div`
    text-decoration: none;
    list-style: none;
    line-height: 1.6rem;
`;

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
                        <List>HTML</List>
                        <List>CSS</List>
                        <List>React JS</List>
                        <List>Redux</List>
                        <List>Context API</List>
                        <List>Axios</List>
                        <List>Bootstrap</List>
                        <List>Material UI</List>
                        <List>DOM Manipulation</List>
                        <List>JSON</List>
                        <List>Ajax</List>
                        <List>JQuery</List>
                        <List>Responsive Web Design</List>
                        <List>TypeScript</List>
                    </ul>
                </SkillsStyles>

                {/* BackEnd Skills */}
                <SkillsStyles>
                    <ul className="skills-container">
                        <h4>BackEnd Skills</h4>
                        <List>Node Js</List>
                        <List>SQL</List>
                        <List>PostgreSQL</List>
                        <List>SQListte Studio</List>
                        <List>Express JS</List>
                        <List>Knex JS</List>
                        <List>Git CList</List>
                        <List>Heroku CList</List>
                    </ul>
                </SkillsStyles>

                {/* Deployment Skills */}
                <SkillsStyles>
                    <ul className="skills-container">
                        <h4>Deployment Skills</h4>
                        <List>Heroku</List>
                        <List>Vercel</List>
                        <List>Netlify</List>
                    </ul>
                </SkillsStyles>

                {/* Additional Skills */}
                <SkillsStyles>
                    <ul className="skills-container">
                        <h4>Agile Project Management</h4>
                        <List>Algorithms</List>
                        <List>Architecture</List>
                        <List>Debugging</List>
                        <List>Deployment</List>
                        <List>Troubleshooting</List>
                        <List>Unit Testing</List>
                        <List>Integration Testing</List>
                        <List>Visual Studio Code</List>
                        <List>CodePen</List>
                        <List>Figma</List>
                        <List>Canva</List>
                    </ul>
                </SkillsStyles>
            </SkillsContentContainer>
        </SkillsContainer>
    );
}

export default Skills;