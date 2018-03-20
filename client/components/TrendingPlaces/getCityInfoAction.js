import values from '../../values.js';
import axios from 'axios';
export default function getNewpostsAction (filter){
  let url='';
  if(filter != 'undefined'){
    url=`/api/city?filter=${filter}`;
  }
  let request = axios.get(url);

  return (dispatch) => {
    request.then(response=>{
      dispatch({
        type: values.CITYINFO,
        payload:response.data.result
      })
    })
  }
}
