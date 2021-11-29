import '../index.css';

import { CartService } from "../services/cartServices";
import { useState } from 'react';

export const MyCart = props => {
    const cartService = new CartService();
    const [cart, setCart] = useState(cartService.getCart());

    return <>
        <div id="cart">
            <table id="cartTable" className="table table-condensed table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th className="cartProducts" >Product</th>
                        <th className="totals" >Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.items.map((cartItem) => <tr key={cartItem.product.name}>
                            <td>{cartItem.quantity}</td>
                            <td className="cartProducts" >{cartItem.product.name + " - "}
                                <span className="eachPrice">{"$" + cartItem.product.price + "/each"}</span>
                            </td>
                            <td className="totals" >{cartItem.product.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div id="total">${cart.total}</div>
        </div>
    </>;
};