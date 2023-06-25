import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import AnimePage from './components/anime_page/AnimePage'
import Test from './components/test/Test'
import './index.css'
import "animate.css/animate.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/anime/:animeId' Component={AnimePage} />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
