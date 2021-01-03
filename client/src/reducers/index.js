import { combineReducers } from 'redux'
import LoginRegister from './LoginRegister'
import video from './videos'

export default combineReducers({
  video,
  LoginRegister
})