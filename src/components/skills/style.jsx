import styled, { css } from "styled-components";

export const SkillsContainer = styled.div`
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

export const SkillsContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SkillsContentText = styled.div`
    display: inline-block;
    color: #f9d342;
    font-size: 22px;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 0.5px;
    position: relative;
    text-transform: uppercase;
    padding: 5px 10px;
    border-bottom: 2px solid #f9d342;
`;