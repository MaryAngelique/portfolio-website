import styled from "styled-components";

export const NavigationContainer = styled.div`
    background-color: #f9d342;
    height: 130px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        height: 100%;
        width: 100%;
        padding: 10px 20px;
        margin-bottom: 20px;
    }
`;

export const NavigationLogo = styled.div`
    cursor: pointer;
    padding: 5px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0px;
    }
`;

export const NavigationLinks = styled.div`
    color: #292826;
    display: flex;
    align-items: center;
    width: 100%;
    height: inherit;
    padding: 0px 20px;
    flex: 1;

    @media screen and (max-width: 800px) {
        width: 80%;
        margin-left: 7rem;
        margin-top: 2rem;
    }
`;