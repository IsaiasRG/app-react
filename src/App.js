import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/pages/Inicio/Inicio';
import Productos from './components/pages/ItemListContainer/Productos';
import Item from './components/pages/Details/Item';
import './App.css';


  
function App() {


  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element = {<Inicio/>} />
          {/* <Route path='/categorias' element = {<Categorias/>} /> */}
          <Route path='/producto' element = {<Productos/>} />
          <Route path='/producto/:id' element = {<Item/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
