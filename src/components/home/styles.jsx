import styled, { css } from "styled-components";

export const HomeContainer = styled.div `
    position: relative;
    height: 100%;
    justify-content: center;
    align-content: center;
`;

export const HomeTitle = styled.div `
    color: #f9d342;
    justify-content: center;
    margin: 0px;
    font-size: 3rem;
    line-height: 5rem;
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    h3 {
        color: #f9d342;
        margin: 0px;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 5rem;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export const HomeImage = styled.div`
    width: 150px;
    height: 150px;
`;