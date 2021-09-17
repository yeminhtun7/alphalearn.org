import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const sendToAnalytics = ({ id, name, value }) => process.env.NODE_ENV === "development" && console.log(`${id}: ${name}=${value}`);

reportWebVitals(sendToAnalytics);
