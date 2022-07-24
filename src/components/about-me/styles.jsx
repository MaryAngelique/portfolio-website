import styled, { css } from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
`;

export const PersonalInfo = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    width: 100%;

    h3 {
        margin-bottom: 10px;
        font-size: 2.5rem;
        font-weight: 700;
        color: #f9d342;
    }

    span {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.5px;
        border-bottom: 2px solid #f9d342;
        position: relative;
        display: inline-block;
        margin-right: 16px;
        padding-bottom: 5px;
        color: #ffe67c;
    }
`;