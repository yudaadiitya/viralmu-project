import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

// POST VIDEO
export const postVideoSuccess = video => ({
    type: 'POST_VIDEO_SUCCESS',
    video
});

export const postVideoFailure = _id => ({
    type: 'POST_VIDEO_FAILURE',
    _id
});

const postVideoRedux = (title, description, url, category) => ({
    type: 'POST_VIDEO',
    title,
    description,
    url,
    category
});

export const postVideo = (title, description, url, category) => {
    return dispatch => {
        dispatch(postVideoRedux(title, description, url, category));
        return request
            .post('video', { title, description, url, category })
            .then(response => {
                dispatch(postVideoSuccess(response.data));
            })
            .catch(err => {
                console.error(err);
                dispatch(postVideoFailure());
            });
    };
};