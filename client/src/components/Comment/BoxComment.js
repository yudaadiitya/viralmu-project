import React from 'react';
import ListComment from '../../components/Comment/ListComment';
import AddComment from '../../components/Comment/AddComment';

function BoxComment(props) {
    return (
        <div class="cmt-bx">
            <div class="clearfix"></div>
            <div class="clearfix"></div>
            <AddComment />
            <br />
            <ListComment />
        </div>
    )
}

export default BoxComment;