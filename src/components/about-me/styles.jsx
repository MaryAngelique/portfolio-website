import styled, { css } from "styled-components";

export const AboutMeContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    align-content: center;
`;

export const Title = styled.div`
    padding: 20px;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-style: italic;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 1rem;
    text-transform: capitalize;
    color: #f9d342;
    flex-grow: 1;
`;

export const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    float: left;
    padding: 10px;

    h2 {
        color: #f9d342;
        text-align: left;
        font-size: 1.5rem;
        padding-bottom: 20px;
        border-bottom: 3px dotted #f9d342;
    }

    h3 {
        margin-bottom: 10px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #f9d342;

        span {
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            border-bottom: 2px solid #f9d342;
            position: relative;
            display: inline-block;
            margin-right: 16px;
            padding-bottom: 5px;
            color: #ffe67c;
        }

        a {
            text-decoration: none;
            color: #f9d342;
        }
    }
`;

export const DeveloperDescription = styled.div`
    float: right;
    padding: 10px;
    width: 40%;
    
    h2 {
        color: #f9d342;
        text-align: right;
        font-size: 1.5rem;
        padding-bottom: 20px;
        border-bottom: 3px dotted #f9d342;
    }

    p {
        color: #ffe67c;
        text-align: right;
        font-size: 18px;
        line-height: 1.65;
    }

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;