import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './contexts/UserContextProvider/UserContextProvider';
import { CookiesProvider } from 'react-cookie'
import ReviewContextProvider from './contexts/ReviewContextProvider/ReviewContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ReviewContextProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </ReviewContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
