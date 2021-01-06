import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

export const loadCommentSuccess = comment => ({
    type: 'LOAD_COMMENT_SUCCESS',
    comment
});

export const loadCommentFailure = () => ({
    type: 'LOAD_COMMENT_FAILURE'
});

export const loadComment = () => {
    return dispatch => {
        return request
            .get('comment')
            .then(response => {
                dispatch(loadCommentSuccess(response.data));
            })
            .catch(error => {
                console.error(error);
                dispatch(loadCommentFailure());
            });
    };
};

export const postCommentSuccess = comment => ({
    type: 'POST_COMMENT_SUCCESS',
    comment
});

export const postCommentFailure = (_id) => ({
    type: 'POST_COMMENT_FAILURE',
    _id
});

const postCommentRedux = (comment) => ({
    type: 'POST_COMMENT',
    comment
});

export const postComment = (comment) => {
    return dispatch => {
        dispatch(postCommentRedux(comment));
        return request
            .post('comment', { comment })
            .then(response => {
                dispatch(postCommentSuccess(response.data));
            })
            .catch(err => {
                console.error(err);
                dispatch(postCommentFailure());
            });
    };
};