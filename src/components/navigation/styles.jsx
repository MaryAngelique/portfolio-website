import styled from "styled-components";

export const NavigationContainer = styled.div`
    background-color: #f9d342;
    height: 130px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const NavigationLogo = styled.div`
    cursor: pointer;
    padding: 5px;
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