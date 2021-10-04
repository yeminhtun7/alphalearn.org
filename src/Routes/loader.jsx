import { lazy } from "@loadable/component";

const Home = lazy(() => import('Pages/Home'));
const Career = lazy(() => import('Pages/Career/Career'));

const Pages = [
    { name: "home", resolved: <Home /> },
    { name: "career", resolved: <Career /> },
]

export default Pages;