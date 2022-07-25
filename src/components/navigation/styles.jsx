import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
    background-color: #f9d342;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
`;

export const NavigationLogo = styled.div`
    cursor: pointer;
    height: 10px;
    width: 10px;
`;

export const NavigationLinks = styled.div`
    color: #292826;
    display: flex;
    align-items: center;
    width: 100%;
    height: inherit;
    padding: 0px 20px;
    flex: 1;

    Link {
        display: flex;
        list-style: none;
        text-align: center;
        line-height: 40px;
        margin-right: 1.5rem;
        font-size: 1.6rem;
    }
`;