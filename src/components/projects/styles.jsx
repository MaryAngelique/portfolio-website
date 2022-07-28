import styled, { css } from "styled-components";

export const ProjectsContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    align-content: center;
`;

export const ProjectsContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;

    p {
        color: #000000;
        margin: 0px;
        font-size: 4rem;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        animation: typingEffect 1s steps(30,end);
    }
`;