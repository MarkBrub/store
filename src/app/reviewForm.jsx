import React from 'react';
import { ProductReview } from '../models/productReview';
import { Rating } from './rating';

export class ReviewForm extends React.Component {
    state = {
        username: "",
        rating: "0",
        comment: ""
    };

    onAddClick() {
        var currentDate = new Date();
        var review = new ProductReview(this.state.username, this.state.rating, this.state.comment, currentDate.toDateString());
        this.props.addReview(review);
        this.setState({
            username: "",
            rating: "0",
            comment: ""
        });   
    }

    render() {
        return <>
            <div id="reviewForm">
                <div id="reviewFormTitle">Add Review</div>
                <form id="formInput">
                    <div id="bloc1">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={ this.state.username }
                        onChange={event => this.setState({ username: event.target.value })} />
                    </div>
                    <div id="bloc2">
                    <label htmlFor="rating">Rating</label>
                    <select
                        name="rating"
                        id="rating"
                        value={ this.state.rating }
                        onChange={ event => this.setState({ rating: event.target.value }) }>
                        <option></option>
                        {
                            [1, 2, 3, 4, 5].map((x, i) => <option key={i}>{x + " Star(s)"}</option>)
                        }
                        </select>
                        <Rating value={this.state.rating[0]} />
                    </div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        name="comment"
                        id="comment"
                        value={this.state.comment}
                        onChange={event => this.setState({ comment: event.target.value })} />
                    <button
                        type="button"
                        id="reviewSubmitButton"
                        onClick={() => this.onAddClick()}>
                        Submit
                    </button>
                </form>
            </div>
        </>;
    }
}