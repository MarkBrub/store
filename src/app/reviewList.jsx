import React from 'react';
import { ProductReview } from '../models/productReview';

export const ReviewList = props => <>
    {/*Add review count to end of header*/}
    <h1>Product Reviews</h1>
    <ul className="list-group">
        {
            !props.reviews.length && <li className="list-group-item">Be the first to add a review!</li>
        }
        {
            props.reviews.map((x, i) => <li className="list-group-item" key={ i }>{ x.userName }</li>)
        }
    </ul>
</>;