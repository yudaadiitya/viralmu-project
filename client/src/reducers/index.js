import { combineReducers } from 'redux'
import authReducer from './auth'
import videoReducer from './videos';
import userRegister from './Register';

export default combineReducers({
 auth: authReducer, user: userRegister, video: videoReducer
})
