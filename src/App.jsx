import { BrowserRouter as Router } from "react-router-dom";
import SwitchedRoutes from "Routes";
// import ToggleableContainer from 'Components/ToggleableContainer';


function App() {
  return (
    // <ToggleableContainer>
      <Router>
        <SwitchedRoutes />
      </Router>
    // </ToggleableContainer>
  );
}

export default App;
