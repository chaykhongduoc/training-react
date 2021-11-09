import { useState } from 'react';
import React, { Component } from 'react';
import Menu from './MenuComponents'
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import DishDetailComponents from "./DishDetailComponents"
import Contact from './ContactComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from './AboutComponent';
import '../App.css'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'



function Main() {
    const [Dishes, setDishes] = useState(DISHES);
    const [idSelected, setIdSelected] = useState(null);
    const [dishes, setDISHES] = useState(DISHES);
    const [comments, setCOMMENTS] = useState(COMMENTS);
    const [leaders, setLEADERS] = useState(LEADERS);
    const [promotions, setPROMOTIONS] = useState(PROMOTIONS);


    function handleSelectedCard(id) {
        setIdSelected(id);
    }

    const HomePage = () => {
        return (
            <Home
                dishes={dishes.filter(dish => dish.featured)[0]}
                promotions={promotions.filter(promo => promo.featured)[0]}
                leaders={leaders.filter(leader => leader.featured)[0]}
            />
        );
    }

    const DishWithId = ({ match }) => {
        return (
            <DishDetailComponents dishes={Dishes} id={idSelected} comments={comments} />
        );

    }


    return (

        <div className="Container" >
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={Dishes} handleSelectedCard={handleSelectedCard} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route path="/aboutus" component={() => <About leaders={leaders} />} />
                <Route path="/contactus" component={Contact} />
                <Redirect to="/home" />

            </Switch>
            <Footer />
        </div>
    );
}
{/* <Menu dishes={Dishes} handleSelectedCard={handleSelectedCard} />
<DishDetailComponents dishes={Dishes} id={idSelected} /> */}

export default Main;
