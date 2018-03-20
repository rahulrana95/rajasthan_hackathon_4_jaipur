import express from 'express';
const router = express.Router();
const dummy = router.get('/city',function(request,response){
	let data = request.body.data;
  let filter = request.query.filter;
	const db = request.app.locals.settings.db;
	const city = db.collection('city');
  let min =-10000;
  let max =10000;
  if(filter == 'snowy'){
    min=-100;
    max=0;
  } else if(filter == 'cold') {
    min=-0.1;
    max=10.1;
  } else if(filter == 'soothing') {
    min=10;
    max=24.9;
  } else if(filter == 'hot') {
    min=24.9;
    max=51;
  }

  let query1='';
  let query2='';

  if(filter == 'undefined'){
      query1= {};
      query2={"views":-1};
  } else {
    query1= {"temp.temp": {$gt:min,$lt:max}};
    query2={"temp.temp":1};
  }

	city.find(query1).sort(query2).toArray((error,result)=>{
		if(error){
			response.json({
				status:404,
				error:error
			});
		} else {
			response.json({
				status:200,
				result:result
			});
		}
	});
});

module.exports = dummy;
