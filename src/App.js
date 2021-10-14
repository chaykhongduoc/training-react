import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap-v5';



function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
