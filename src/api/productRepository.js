import { ProductReview } from '../models/productReview';
import axios from 'axios';

export class ProductRepository {

    url = "https://api.johnlawrimore.com/store/products";

    config = {
        headers: {
            Authorization: "krink"
        }
    };

    getProducts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    addReview(id, review) {
        return new Promise((resolve, reject) => {
            console.log(review);
            axios.post(`${this.url}/${id}/reviews`, new ProductReview(review.userName, review.rating, review.comment, review.date), this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }
}