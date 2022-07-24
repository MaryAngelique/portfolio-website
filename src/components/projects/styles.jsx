import styled, { css } from "styled-components";

export const ProjectsContainer = styled.div`
    padding: 20px;
    width: 100%;

    ul {
        display: inline-block;
        margin: 0 auto;
        border-radius: 25px;
        border: 1px dashed #f9d342;

        :hover {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: 0.5s ease;
            background-color: #f9d342;
        }
    }
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