import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/Inicio/Inicio';
import Tienda from './components/pages/ItemListContainer/ItemListContainer'
import Item from './components/pages/Details/Item';
import './App.css';


  
function App() {


  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element = {<Inicio/>} />
          <Route path='/producto' element = {<Tienda/>} />
          <Route path='/producto/:productoId' element = {<Item/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
