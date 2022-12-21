import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from '../myBase';

function App() {
  const [isLogIn, setIsLogIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLogIn={isLogIn} />
      <footer>&copy; baewitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
