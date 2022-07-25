import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavigationContainer = styled.div`
    background-color: #f9d342;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const NavigationLogo = styled(Link)`
    cursor: pointer;
    height: 100%;
    width: 70px;
    padding: 15px;
`;

export const NavigationLinks = styled.div`
    color: #292826;
    display: flex;
    align-items: center;
    width: 100%;
    height: inherit;
    padding: 0px 20px;
    flex: 1;
`;
