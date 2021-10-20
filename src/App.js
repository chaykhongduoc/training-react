import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents'
import { DISHES } from './shared/dishes'
import DishDetailComponents from './components/DishDetailComponents';



function App() {
  const [Dishes, setDishes] = useState(DISHES);
  const [idSelected, setIdSelected] = useState(null);
  function handleSelectedCard(id) {
    setIdSelected(id);
  }


  return (
    <div className="App">
      <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={Dishes} handleSelectedCard={handleSelectedCard} />
      <DishDetailComponents dishes={Dishes} id={idSelected} />
    </div>
  );
}

export default App;
