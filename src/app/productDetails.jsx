import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Product } from '../models/product';
import { ReviewForm } from './reviewForm';
import { ReviewList } from './reviewList';
import '../index.css';

export class ProductDetails extends React.Component {
    state = {
    product: new Product(
        1,
        "Jif Peanut Butter, 40 ounce",
        "7g of Protein per serving with no preservatives, artifical flavors or colors.",
        7.99,
        "https://johnlawrimore.com/smu/101.png",
        []
    )
    };

    addReview(review) {
        var reviews = this.state.product.reviews;
        reviews.push(review);
        this.setState({ reviews });
    }

    render() {
        return <>
            <div id="navBar">
                <a href="http://localhost:3000/" >Tasty snacks</a>
                <span> / { this.state.product.name }</span>
            </div>
            <Jumbotron>
                <img src="https://johnlawrimore.com/smu/101.png"></img>
                <h1>Name</h1>
                <Badge>Price</Badge>
                <p>Description</p>
            </Jumbotron>
            <ReviewList reviews={ this.state.product.reviews } />
            <ReviewForm addReview={ review => this.addReview(review) } />
        </>;
    }
}