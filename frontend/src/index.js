import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';
import App from './App';
import NotFound from './pages/404'
import Login from './pages/Login'
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Profile from './pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/profile/:id' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
