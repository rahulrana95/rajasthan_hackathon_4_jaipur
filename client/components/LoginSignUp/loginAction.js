import values from '../../values.js';
import axios from 'axios';
export default function loginAction (data){

  return (dispatch) => {
    dispatch({
      type: values.LOGIN,
      payload:data
    })
  }
}
