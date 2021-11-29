import "../index.css"

import React, { useEffect, useState } from "react";

import { CartService } from "../services/cartServices";
import { Link } from "react-router-dom";
import { ProductRepository } from "../api/productRepository";

export const ProductsList = props => {
    const [products, setProducts] = useState(undefined);
    const productRepository = new ProductRepository();
    const cartService = new CartService();
    
    useEffect(() => {
        cartService.getCart();
        productRepository.getProducts().then(x => setProducts(x));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!products) {
        return <div>Loading...</div>
    }

    return <>
        <div id="navBar">
            <span id="listNavBar" >Tasty snacks</span>
        </div>
        <div id="listContainer">
            {
                products.map(product => <div key={product.id} className="productListing">
                    <div className="imgPriceContainer">
                        <img src={product.imageUrl} alt={product.name} className="listingImage"></img>
                        <div className="listingPrice">{ "$" + product.price }</div>
                    </div>
                    <div className="listingName">{product.name}</div>
                    <Link to={ `products/${product.id}` } className="listingButton btn btn-info btn-block">Product Details</Link>
                    <Link to="/cart" className="listingButton btn btn-warning btn-block"
                        onClick={() => cartService.addToCart(product)} >
                        Add to Cart
                    </Link>
                </div>)
            }
        </div>
    </>
};