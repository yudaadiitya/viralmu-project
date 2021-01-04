import { combineReducers } from 'redux'
import Login from './Login'
import video from './videos';
import Register from './Register';
import detailVideo from './DetailVideo'

export default combineReducers({
  Login, Register, video, detailVideo
})
