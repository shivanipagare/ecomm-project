import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/login';
import MainPage from './mainpage';
import Register from './Login/register';
function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
