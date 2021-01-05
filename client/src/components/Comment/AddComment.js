import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postComment } from '../../actions/comments';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }

        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.state.comment);
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div class="vcp_inf pc">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type your comments"
                        value={this.state.comment}
                        onChange={this.handleChangeComment}
                    />
                    <button type="submit">Comment</button>
                </form>
                <div class="clearfix"></div>
                <div class="rt-cmt">
                    <div class="clearfix"></div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(postComment(comment)),
})

export default connect(
    null,
    mapDispatchToProps
)(AddComment)