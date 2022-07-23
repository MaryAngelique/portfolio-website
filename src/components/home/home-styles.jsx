import "styled-components";

export const HomeContainer = styled.div `
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

        h1 {
            color: #f9d342;
            margin: 0px;
            font-weight: 500;
            font-size: 8rem;
            line-height: 10rem;
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            animation: typingEffectAnimation 2.5s steps(20, end);
        }
`;