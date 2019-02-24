import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish ({dish}) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments ({dish}) {
    if (dish != null) {
        const comments = dish.comments.map((comment) => {
            return (
                <ul className="list-unstyled">
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit'}).format(new Date(comment.date))}</p>
                </ul>
            );
        });
        return (comments);
    }
    else {
        return (
            <div></div>
        );
    }
}


const DishDetail = (props) => {
    const selectedDish = props.dish;
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={selectedDish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Reviews</h4>
                    <RenderComments dish={selectedDish} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;