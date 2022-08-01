import styled, { css } from "styled-components";

export const HomeContainer = styled.div `
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const HomeTitle = styled.div `
    color: #f9d342;
    float: left;
    justify-content: center;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 5rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    h3 {
        color: #f9d342;
        align-items: left;
        margin: 0px;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 5rem;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export const HomeImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: #f9d342 dotted 5px;
    width: 250px;
    height: auto;
    opacity: 0.1;
    
    :hover {
        transform: scale(1.1);
        opacity: 1;
    }
`;