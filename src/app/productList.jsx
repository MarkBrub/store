import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import { ProductRepository } from "../api/productRepository";

export const ProductsList = props => {
    const [products, setProducts] = useState(undefined);
    const productRepository = new ProductRepository();
    
    useEffect(() => {
        productRepository.getProducts().then(x => setProducts(x));
        console.log(products);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!products) {
        return <div>Loading...</div>
    }

    return <>
        <Link to={ `products/1` }>{ "PRODUCT!!!" }</Link>
        <table className="table table-condensed table-striped">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map(product => <tr key={product.id}>
                    <td>
                        <Link to={ `edit/${product.id}` }>{ product.name }</Link>
                    </td>
                    <td>{ product.price }</td>
                </tr>)
            }
        </tbody>
        </table>
        </>
};