import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavApp from './NavApp';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <NavApp />
  </React.StrictMode>,
  document.getElementById('root')
);


/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavApp />
  </React.StrictMode>
);
*/

/*
const navB = ReactDOM.createRoot(document.getElementById("root"));
navB.render(
  <React.StrictMode>
    <NavApp />
  </React.StrictMode>
);
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
