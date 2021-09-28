import './App.css';
import image from './images/bg.jpg';
import { SubContainer, Container, Heading, Link, Text } from './App.styles';

function App() {
  return (
    <Container image={image} >
      <SubContainer>
        <small>
          <Text>
            We are working hard to bring you the best experience on the web.
          </Text>
        </small>
        <Heading>Coming Soon ...</Heading>
        <Text>
          Meanwhile you may check on &nbsp;
          <Link
            href={`https://facebook.com/alphalearn.co`}
            target="_blank"
            rel="noopener noreferrer"
          >Facebook</Link> ...
        </Text>
      </SubContainer>
    </Container>
  );
}

export default App;
