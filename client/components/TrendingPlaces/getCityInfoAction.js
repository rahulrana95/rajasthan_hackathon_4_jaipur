import values from '../../values.js';
import axios from 'axios';
export default function getNewpostsAction (data){
  let request = axios.get('/api/city');

  return (dispatch) => {
    request.then(response=>{
      dispatch({
        type: values.CITYINFO,
        payload:response.data.result
      })
    })
  }
}
