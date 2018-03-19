import values from '../../values.js';
import axios from 'axios';
export default  function getCityInfoReducer(state={status:values.NA,payload:[]},action){
  switch(action.type){
    case values.CITYINFO :
      return Object.assign({},state,{status:values.CITYINFO,payload:action.payload});
    default : return Object.assign({},state);
  }
}
