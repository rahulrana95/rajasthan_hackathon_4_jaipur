import express from 'express';
import axios from 'axios';
const router = express.Router();
const dummy = router.get('/gettemp',function(request,response){
	//let data = request.body.data;
	const db = request.app.locals.settings.db;
	const city = db.collection('city');
	city.find().toArray((error,result)=>{
		if(error){
			response.json({
				status:404,
				error:error
			});
    }
		else {

      for( var i=0;i<result.length;i++){
        if(result[i]['temp'] == 0){
        (function(myData){
          axios.get(`http://api.wunderground.com/api/d9be70f8e160bc1b/conditions/forecast/q/${result[i].latitude},${result[i].longitude}.json`).then(responseAxios=>{
          let data = responseAxios.data;
          let obj = {
            temp:data['current_observation'].temp_c,
            weather:data['current_observation'].weather,
            forecast:data['forecast']['txt_forecast']['forecastday']
          };
          city.update(
   { _id: myData['_id'] },
   { $set:
      {
        temp: obj
      }
   },(err11,res11)=>{
     if(err11){
       console.log(err11);
     } else{
       console.log(res11)
     }
   }
)
        })})(result[i]);



      }
      }




      response.json({
				status:200,
				result:result
			});
		}

	});

	});
module.exports = dummy;
