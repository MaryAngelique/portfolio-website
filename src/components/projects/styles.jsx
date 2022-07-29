import styled, { css } from "styled-components";

export const ProjectsContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    align-content: center;
`;

export const Title = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 1rem;
    text-transform: capitalize;
    color: #f9d342;
    flex-grow: 1;
`;

export const ProjectsListContainer = styled.div`
    flex-direction: column;
    text-align: center;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
`;

export const ProjectStyles = styled.div`
    display: inline-block;
    color: #f9d342;
    margin: 40px;
    letter-spacing: 0.5px;
    position: relative;
    text-transform: uppercase;
    padding: 5px;
`;