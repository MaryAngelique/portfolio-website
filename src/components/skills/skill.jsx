import React from "react";
import Navigation from "../navigation/navigation";

import { 
    SkillsContainer, 
    SkillsContentContainer, 
    SkillsContentText,
    Title,
} from "./style";

const frontEndData = [
    // FrontEnd Skills
    {
        type: "FrontEnd",
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
        type: "BackEnd",
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
        type: "Additional Skills",
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
                
            </SkillsContentContainer>
        </SkillsContainer>
    );
}

export default Skills;