import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
    background-color: #292826;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
`;

export const NavigationLogo = styled.div`
    cursor: pointer;
    height: 250px;
    width: 250px;
`;

export const NavigationLinks = styled.div`
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