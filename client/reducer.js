import { combineReducers } from 'redux';
import getCityInfoReducer from './components/TrendingPlaces/getCityInfoReducer';
import loginReducer from './components/LoginSignUp/loginReducer';
import signUpReducer from './components/LoginSignUp/signUpReducer';
const rootReducer  = combineReducers({
  loginReducer,
  signUpReducer,
  getCityInfoReducer
});

export default rootReducer;
