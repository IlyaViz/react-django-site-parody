import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IsAuthenticatedRoute } from './routes/routes'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home/Home'
import LoginPage from './components/login_page/LoginPage';
import AnimePage from './components/anime_page/AnimePage'
import MyPage from './components/my_page/MyPage';
import ProfilePage from './components/profile_page/ProfilePage';
import Test from './components/test/Test'
import './index.css'
import "animate.css/animate.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/anime/:animeId' Component={AnimePage} />
        <Route path='/my' element={
          <IsAuthenticatedRoute>
            <MyPage />
          </IsAuthenticatedRoute>} />
        <Route path='/profile' element={
          <IsAuthenticatedRoute>
            <ProfilePage />
          </IsAuthenticatedRoute>
        } />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
