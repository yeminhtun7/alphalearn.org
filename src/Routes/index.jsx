import { Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Pages from "./loader";

const ActualPage = ({ type }) => {
    return (
        Pages.filter(page => page.name === type).map(page => {
            return (
                <div key={type}>
                    <Suspense fallback={<div>Loading {type}...</div>}>
                        {page.resolved}
                    </Suspense>
                </div>
            );
        })
    );
};

const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => <ActualPage type="home" />} />
        <Route exact path="/career" render={() => <ActualPage type="career" />} />
    </Switch>
);

export const ToHome = ({ customName, style }) => (
    <Link to="/" style={style}>
        {customName || `To Home`}
    </Link>
)


export const ToCareer = ({ customName, style }) => (
    <Link to="/career" style={style}>
        &nbsp; {customName || `To Career`} &nbsp;
    </Link>
)


export default Routes;