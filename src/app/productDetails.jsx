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
                <span id="breadcrumbProductName"> {" / " + this.state.product.name }</span>
            </div> 
            <Jumbotron id="jumbo">
                <img src={ this.state.product.imageUrl } id="productImage"></img>
                <div id="productInfo">
                    <h1 id="productName">{ this.state.product.name }</h1>
                    <Badge id="productPrice">{ "$" + this.state.product.price }</Badge>
                    <div id="productDescription">{ this.state.product.description }</div>
                </div>
            </Jumbotron>
            <ReviewList reviews={ this.state.product.reviews } />
            <ReviewForm addReview={ review => this.addReview(review) } />
        </>;
    }
}