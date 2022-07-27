import React from "react";
import Navigation from "../navigation/navigation";

import { 
    SkillsContainer, 
    SkillsContentContainer, 
    FrontEndSkills,
    BackEndSkills,
    Title,
} from "./style";

const frontEndData = [
    // FrontEnd Skills
    {
        title: "FrontEnd",
        data: [
            {
                name: "HTML"
            },
            {
                name: "CSS"
            },
            {
                name: "ReactJs"
            },
            {
                name: "Redux"
            },
            {
                name: "Context API"
            },
            {
                name: "Axios"
            },
            {
                name: "Bootstrap"
            },
            {
                name: "Material UI"
            },
            {
                name: "DOM Manipulation"
            },
            {
                name: "JSON"
            },
            {
                name: "Ajax"
            },
            {
                name: "JQuery"
            },
            {
                name: "Responsive Web Design"
            },
        ]
    }
];

    // BackEnd Skills
const backEndData = [
    {
        title: "BackEnd",
        data: [
            {
                name: "Node.js"
            },
            {
                name: "SQL"
            },
            {
                name: "PostgreSQL"
            },
            {
                name: "Express"
            },
            {
                name: "Knex"
            },
            {
                name: "Python"
            },
            {
                name: "Git CLI"
            },
            {
                name: "Heroku CLI"
            },
        ]
    },
]

const deploymentData = [
    // Deployment
    {
        type: "Deployment",
        data: [
            {
                name: "Heroku"
            },
            {
                name: "Vercel"
            },
            {
                name: "Netlify"
            },
        ]
    },
]

const additionalSkillsData = [
    // Additional Skills
    {
        title: "Additional Skills",
        data: [
            {
                name: "Agile Project Management"
            },
            {
                name: "Algorithms"
            },
            {
                name: "Architecture"
            },
            {
                name: "Debugging"
            },
            {
                name: "Deployment"
            },
            {
                name: "Troubleshooting"
            },
            {
                name: "Unit Testing"
            },
            {
                name: "Integration Testing"
            },
        ]
    },
]

const Skills = () => {
    return(
        <SkillsContainer>
            <Navigation/>
            <Title>Skills</Title>

            <SkillsContentContainer>
                {/* FrontEnd Skills */}
                <FrontEndSkills>
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
                </FrontEndSkills>

                {/* BackEnd Skills */}
                <BackEndSkills>
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
                </BackEndSkills>

                {/* Deployment Skills */}
                <div className="deployment-skills">
                    <ul className="skills-container">
                        <h4>Deployment Skills</h4>
                        <li>Heroku</li>
                        <li>Vercel</li>
                        <li>Netlify</li>
                    </ul>
                </div>

                {/* Additional Skills */}
                <div className="additional-skills">
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
                </div>
            </SkillsContentContainer>
        </SkillsContainer>
    );
}

export default Skills;