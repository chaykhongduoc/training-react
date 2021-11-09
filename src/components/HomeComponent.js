import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

Home.propTypes = {
    dishes: PropTypes.array,
    leaders: PropTypes.array,
    promotions: PropTypes.array,

}

Home.defaultProps = {
    dishes: [],
    leaders: [],
    promotions: [],

}
function RenderCard(item) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    const { dishes, leaders, promotions } = props;

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md md-1">
                    {RenderCard(dishes)}
                </div>
                <div className="col-12 col-md m-1">
                    {RenderCard(promotions)}
                </div>
                <div className="col-12 col-md m-1">
                    {RenderCard(leaders)}
                </div>
            </div>
        </div>
    );
}

export default Home;