import './App.css';
import { AppContainer, Heading, Link } from './App.styles';



function App() {
  return (
    <AppContainer>
      <Heading>Coming Soon ...</Heading>
      <p>
        Meanwhile check on &nbsp;
        <Link
          href={`https://facebook.com/alphalearn.co`}
          target="_blank"
          rel="noopener noreferrer"
        >Facebook</Link>
      </p>
    </AppContainer>
  );
}

export default App;
