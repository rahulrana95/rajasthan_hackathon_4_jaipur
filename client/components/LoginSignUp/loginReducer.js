import values from '../../values.js';
import axios from 'axios';
export default  function loginReducer(state={status:values.LOGOUT,payload:[]},action){
  switch(action.type){
    case values.LOGIN :
      return Object.assign({},state,{status:values.ALREADYLOGIN,payload:action.payload});
    case values.LOGOUT :
      return Object.assign({},state,{status:values.LOGOUT,payload:action.payload});
    default : return Object.assign({},state);
  }
}
