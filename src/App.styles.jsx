import styled from "styled-components";

export const AppContainer = styled.div`
    background-color: #fafafa;
    color: #000;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1`
    color: #000;
    font-size: 3em;
    @media only screen and (max-width: 768px) {
        font-size: 1.5em;
    }
    font: "Open Sans", sans-serif;
    text-shadow: 0 0 1em #000;
    transition: cubic-bezier(0.215, 0.610, 0.355, 1);
`;

export const Link = styled.a`
    color: hotpink;
    font-size: 1em;
    font: "Open Sans", sans-serif;
    text-decoration: none;
    transition: cubic-bezier(0.215, 0.610, 0.355, 1);
    &:hover {
        text-decoration: underline;
    }
`;