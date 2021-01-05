import { combineReducers } from 'redux'
import authReducer from './auth'
import video from './videos';
import userRegister from './Register';
import detailVideo from './DetailVideo';
import comment from './comments';

export default combineReducers({
 auth: authReducer, user: userRegister, video, detailVideo, comment
})
