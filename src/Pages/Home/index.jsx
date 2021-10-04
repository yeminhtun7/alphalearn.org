import React from "react";
import { ToCareer } from "Routes";
import AppContainer from "./Home.styles";

const Home = () => {

    return (
        <AppContainer>
            <h1>Welcome Home 🏡</h1>
            <ToCareer customName={`Check Career 🚀`} style={{ color: "hotpink" }} />
        </AppContainer>
    )
}

export default Home;