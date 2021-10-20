import { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import React from 'react';
import './DishDetail.css'

DishDetailComponents.propTypes = {
    dishes: PropTypes.array,
    id: PropTypes.number,
};
DishDetailComponents.defaultProps = {
    dishes: [],
    id: null,
}

function DishDetailComponents(props) {
    let { dishes, id } = props;
    if (id != null) {
        var title = 'Comments'
    }
    console.log(id)
    let CardSelected = '';

    dishes.forEach(dish => {
        if (dish.id === id) {
            CardSelected = dish;
        }
    })
    function renderComments(id) {
        if (id != null) {
            console.log('id:', id)
            let { comments } = dishes[id];
            console.log(comments);
            let DishCommentsSelected = comments.map(comment => {
                return (
                    <div className="mt-2 mb-2">
                        <CardTitle >{comment.comment}</CardTitle >
                        <CardTitle >--{comment.author} , {comment.date}</CardTitle>
                    </div>
                )
            })
            return DishCommentsSelected;
        }
    }




    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1 d-flex">
                    <Card>
                        <CardImg width="100%" src={CardSelected.image} alt={CardSelected.name} />
                        <CardTitle className="mt-3 " >{CardSelected.name} </CardTitle>
                        <p>{CardSelected.description}</p>
                    </Card>
                    <Card>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1 d-flex">
                    <Card>


                        <h2>{title}</h2>
                        {renderComments(id)}
                    </Card>
                </div>

            </div>
        </div >
    );
}

export default DishDetailComponents;