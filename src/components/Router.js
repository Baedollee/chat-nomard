import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';

const AppRouter = ({ isLogIn }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLogIn ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route path='/' element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
