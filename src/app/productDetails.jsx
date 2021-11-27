import '../index.css';

import { Badge } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Product } from '../models/product';
import { ProductRepository } from '../api/productRepository';
import React from 'react';
import { ReviewForm } from './reviewForm';
import { ReviewList } from './reviewList';

export class ProductDetails extends React.Component {
    productRepository = new ProductRepository();

    state = {
        product: undefined
    };

    addReview(review) {
        var reviews = this.state.product.reviews;
        reviews.push(review);
        this.setState({ reviews });
    }

    render() {
        if (!this.state.product) {
            return <div>Loading...</div>
        }

        console.log(this.state)
        return <>
            <div id="navBar">
                <a href="http://localhost:3000/" >Tasty snacks</a>
                <span id="breadcrumbProductName"> {" / " + this.state.product.name }</span>
            </div> 
            <Jumbotron id="jumbo">
                <img src={ this.state.product.imageUrl } alt={ this.state.product.name } id="productImage"></img>
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

    componentDidMount() {
        let id = this.props.match.params.productId;
        if (id) {
            this.productRepository.getProduct(id).then(product => this.setState({
                product: new Product(product.id, product.name, product.description, product.price, product.imageUrl, product.reviews)
        }));
        }
    }
}