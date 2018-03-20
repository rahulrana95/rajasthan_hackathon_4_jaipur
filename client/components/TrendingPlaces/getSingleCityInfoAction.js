import values from '../../values.js';
import axios from 'axios';
export default function getNewpostsAction (id){
  let request = axios.get('/api/city/'+id);

  return (dispatch) => {
    request.then(response=>{
      console.log(response);
      dispatch({
        type: values.SINGLECITYINFO,
        payload:response.data.result
      })
    })
  }
}
