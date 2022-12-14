import './Common/i18n'
// import ReactDOM from 'react-dom/client';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// const rootElement = document.getElementById("root")
// const root = ReactDOM.createRoot(rootElement as HTMLElement)

// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(LoginApiResponseObjTypeslog))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
