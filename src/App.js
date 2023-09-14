import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import Productos from './components/ItemListContainer/Productos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


  


function App() {


  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element='' />
      </Routes>
      <Titulo />
      <Productos />
    
    </BrowserRouter>
  );
}

export default App;
