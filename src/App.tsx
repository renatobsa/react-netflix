import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { AuthProvider } from './providers/AuthProvider';

const App = () =>{

  return (
  <AuthProvider>
  <BrowserRouter >
    <Routes/>
  </BrowserRouter>
  </AuthProvider>
  )
}

export default App;