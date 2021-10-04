import styled from "styled-components";

export default styled.div`
    background-color: #fafafa;
    color: ${props => props.color || "#000"};
    font: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;