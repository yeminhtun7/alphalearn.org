import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from "Store";

// Theme
import DarkThemeProvider from "Providers/darkThemeProvider";


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <App />
      </DarkThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const sendToAnalytics = ({ id, name, value }) => process.env.NODE_ENV === "development" && console.log(`${id}: ${name}=${value}`);

reportWebVitals(sendToAnalytics);
