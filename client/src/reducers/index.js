import { combineReducers } from 'redux'
import Login from './Login'
import video from './videos';
import Register from './Register';

export default combineReducers({
  Login, Register, video
})
