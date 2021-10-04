import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // expect loadable component
  const linkElement = screen.getByText(/Loading home.../i); 
  expect(linkElement).toBeInTheDocument();
});
