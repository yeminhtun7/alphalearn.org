import styled from "styled-components";

export const Container = styled.div`
    background-color: #fafafa;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
`;

export const SubContainer = styled.div`
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
    color: azure;
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

export const Text = styled.p`
    color: #555;
    font-size: 1.2em;
    font: "Open Sans", sans-serif;
    text-shadow: 0 0 2em cyan;
    text-align: center;
`;