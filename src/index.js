import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home.jsx'
import Translator from './Pages/Translator.jsx'
import RandomString from './Pages/RandomString.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutess=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/translator',
      element:<Translator/>
    },
    {
      path:'/random-string',
      element:<RandomString/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutess}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
