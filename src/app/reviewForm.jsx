import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from '../models/product';
import { ProductReview } from '../models/productReview';
import { Rating } from './rating';

export class ReviewForm extends React.Component {
    state = {
        username: "",
        rating: "",
        comment: ""
    };

    onAddClick() {
        var currentDate = new Date();
        var review = new ProductReview(this.state.username, this.state.rating, this.state.comment, currentDate.toDateString());
        this.props.addReview(review);
        this.setState({
            username: "",
            rating: "",
            comment: ""
        });   
    }

    render() {
        return <>
            <div>
                <div>Add Review</div>
                <form>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={ this.state.username }
                        onChange={ event => this.setState({ username: event.target.value }) } />
                    <select
                        name="Rating"
                        id="Rating"
                        value={ this.state.rating }
                        onChange={ event => this.setState({ rating: event.target.value }) }>
                        <option></option>
                        {
                            [1, 2, 3, 4, 5].map((x, i) => <option key={i}>{x + " Star(s)"}</option>)
                        }
                    </select>
                    <Rating value={ this.state.rating[0] } />
                    <input
                        type="text-area"
                        name="comment"
                        id="comment"
                        value={this.state.comment}
                        onChange={ event => this.setState({ comment: event.target.value }) }/>
                </form>
                <button
                    type="button"
                    className="btn btn-success btn-block"
                    onClick={() => this.onAddClick()}>
                    Submit
                </button>
            </div>
        </>;
    }
}