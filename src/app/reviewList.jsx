import { Rating } from './rating';
import React from 'react';

export const ReviewList = props => <>
    {/*Add review count to end of header*/}
    <div id="reviewListTitle">Product Reviews <div id="numReviews">({ props.reviews.length })</div></div>
    <ul className="list-group">
        {
            !props.reviews.length && <li className="noReviews">
                <div className="reviewText">Be the first to add a review!</div>
            </li>
        }
        {
            props.reviews.map((x, i) => <li key={i}>
                <div className="review">
                    <div className="reviewRating">
                        <Rating value={x.rating[0]} />
                    </div>
                    <div className="reviewText">
                        <div className="username">{ x.userName }</div>
                        <div className="date">{ x.date }</div>
                        <div className="comment">"{ x.comment }"</div>
                    </div>
                </div>
            </li>)
        }
    </ul>
</>;