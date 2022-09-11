import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, {createGlobalStyle} from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BookPage from './components/BookPage';
import Main from './components/Main'
import Header from './components/Header';
import About from './components/About'

const Global = createGlobalStyle
`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Global/>
        <Routes> 
            <Route path="/" element={<App />}>
              <Route path="/" element={<Header/>}></Route>
              <Route path="search=:id" element={<Main />}>
              </Route>
              <Route path="/id=:id" element={<BookPage />}>
              </Route>
              <Route
                path="*"
                element={<div>Page not found. Try to press 'Home' button.</div>}
              />
            </Route>
            <Route path="/about" element={<About/>}>
            </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

