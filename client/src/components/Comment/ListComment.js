import React, { Component } from 'react';
import ItemComment from '../Comment/ItemComment';
import { connect } from 'react-redux';
import { loadComment } from '../../actions/comments'

class ListComment extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getComment();
    }

    render() {
        let { comment } = this.props;

        const listNode = comment.map((item, index) =>
            <ItemComment
                index={index + 1}
                key={item._id}
                id={item._id}
                comment={item.comment}
            />
        )
        
        return (
            <ul class="cmn-lst">
                {listNode}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    comment: state.comment
})

const mapDispatchToProps = (dispatch) => ({
    getComment: () => dispatch(loadComment())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComment)