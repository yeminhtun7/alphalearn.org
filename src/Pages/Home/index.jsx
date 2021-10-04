import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToCareer } from "Routes";
import AppContainer from "./Home.styles";
import { toggleTheme } from "Reducers/themeSlice";
import ToggleableContainer from 'Components/ToggleableContainer';

const Home = () => {
    const dispatch = useDispatch();
    const darkThemeEnabled = useSelector((state) => state.darkTheme.darkThemeEnabled);

    return (
        <ToggleableContainer> {/* This should wrap all pages in App.jsx but for now just home not to break any other pages' styles */}
            <AppContainer>
                <h1 style={{ fontFamily: "revert" }}>Welcome {darkThemeEnabled ? `Home!  👻` : ` AlphaLearn.org 👩‍🏫`}</h1>
                <div style={{ marginBottom: "1em" }}>
                    <span>Dark Mode</span>
                    <input checked={darkThemeEnabled} type="checkbox" id="checkbox" onChange={() => dispatch(toggleTheme())} />
                </div>
                <ToCareer customName={`Check Career 🚀`} style={{ color: "hotpink" }} />
            </AppContainer>
        </ToggleableContainer>
    )
}

export default Home;