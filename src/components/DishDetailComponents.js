import { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';

import './DishDetail.css'

DishDetailComponents.propTypes = {
    dishes: PropTypes.array,
    id: PropTypes.number,
    comments: PropTypes.array,
};
DishDetailComponents.defaultProps = {
    dishes: [],
    id: null,
    comments: [],
}

function DishDetailComponents(props) {
    let { dishes, id, comments } = props;
    if (id != null) {
        var title = 'Comments'
    }
    let CardSelected = '';

    dishes.forEach(dish => {
        if (dish.id === id) {
            CardSelected = dish;
        }
    })
    function renderComments(id) {
        if (id != null) {
            console.log('a:', id)
            let DishCommentsSelected = comments.filter(comment => comment.dishId === id);
            console.log(DishCommentsSelected);
            DishCommentsSelected = DishCommentsSelected.map(comment => {
                return (
                    <div className="mt-2 mb-2">
                        <CardTitle >{comment.comment}</CardTitle >
                        <CardTitle >--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </CardTitle>
                    </div>
                )
            })
            return DishCommentsSelected;
        }
    }




    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{CardSelected.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{CardSelected.name}</h3>
                    <hr />
                </div>
            </div>
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