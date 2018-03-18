import { combineReducers } from 'redux';
//import getAllPostsReducer from './ShowAllPosts/GetAllPostsReducer';
import loginReducer from './components/LoginSignUp/loginReducer';
import signUpReducer from './components/LoginSignUp/signUpReducer';
const rootReducer  = combineReducers({
  loginReducer,
  signUpReducer
});

export default rootReducer;
