import React from 'react';
import ReactDOM from 'react-dom/client';
// import Login from './Login';
// import Header from './Header'
// import Footer from './Footer';
// import Content from './Content';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <>
    <App/>

  </>
          );
// when you render there should always be a parent element, so use div <div></div> or you could use somwthing called fragment<></>
//instead of writing those login stuff here, we make components-made Login.js (L caps)