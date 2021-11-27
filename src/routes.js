import { MyCart } from "./app/myCart";
import { ProductDetails } from "./app/productDetails";
import { ProductsList } from "./app/productList";

export const ROUTES = [
    { path: '/', exact: true, component: ProductsList },
    { path: '/products/:productId', component: ProductDetails },
    { path: '/cart', component: MyCart }
];