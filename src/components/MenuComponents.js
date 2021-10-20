import { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import React from 'react'

Menu.propTypes = {
    dishes: PropTypes.array,
    handleSelectedCard: PropTypes.func,
}

Menu.defaultProps = {
    dishes: [],
    handleSelectedCard: null,
}

function Menu(props) {
    const [SelectedDish, setSelectedDish] = useState(null);
    function handleClickCard(dish) {
        setSelectedDish(dish);
        props.handleSelectedCard(dish.id);
    }

    // function renderDish(SelectedDish) {
    //     if (SelectedDish != null) {
    //         return (
    //             <Card>
    //                 <CardImg width="100%" src={SelectedDish.image} alt={SelectedDish.name} />
    //                 <CardImgOverlay>
    //                     <CardTitle>{SelectedDish.name} </CardTitle>
    //                     <p>{SelectedDish.description}</p>
    //                 </CardImgOverlay>
    //             </Card>
    //         )
    //     }
    //     else {
    //         return <div></div>
    //     }
    // }




    const { dishes } = props;
    const menu = dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1" >
                <Card onClick={() => { handleClickCard(dish) }} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name} </CardTitle>
                        <p>{dish.description}</p>
                    </CardImgOverlay>
                </Card>

            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>

        </div>
    );
}



export default Menu;