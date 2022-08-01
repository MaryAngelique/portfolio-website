import styled from "styled-components";

export const ContactContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const ContactContent = styled.div`
    padding: 20px;
`;


export const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 12px;
    transition: all 0.5s ease;
    position: relative;
    background-color: transparent;
    color: #f9d342;
`;

export const Label = styled.div`
    top: 7px;
    left: 12px;
    color: #f9d342;
    font-size: 1rem;
    margin-bottom: 30px;
`;

export const Button = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    letter-spacing: 1.5px;
    line-height: 1rem;
    background-color: #f9d342;
    border-radius: 20px;
    text-transform: capitalize;
    color: #292826;
    flex-grow: 1;
`;