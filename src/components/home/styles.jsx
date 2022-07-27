import styled, { css } from "styled-components";

export const HomeContainer = styled.div `
    position: relative;
    height: 100%;
    justify-content: space-evenly;
    align-content: center;
`;

export const HomeTitle = styled.div `
    color: #f9d342;
    float: left;
    justify-content: center;
    margin: 0px;
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
`;