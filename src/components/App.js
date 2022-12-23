import React, { useState } from 'react';
import AppRouter from './Router';
import SignIn from './SignIn';

function App() {
  return (
    <>
      <SignIn />
      <footer>&copy; baewitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
