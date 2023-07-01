import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import LoginPage from './components/login_page/LoginPage';
import AnimePage from './components/anime_page/AnimePage'
import Test from './components/test/Test'
import './index.css'
import "animate.css/animate.min.css";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/anime/:animeId' Component={AnimePage} />
          <Route path="/test" Component={Test} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
