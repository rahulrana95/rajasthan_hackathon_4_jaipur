import express from 'express';
const router = express.Router();
const dummy = router.post('/city',function(request,response){
	let data = request.body.data;
	const db = request.app.locals.settings.db;
	const city = db.collection('city');

  for (let i=0;i<data.length;i++){
    data[i]['updatedAt']= new Date();
    data[i]['views']=0;
  }

	city.insert(data,(error,result)=>{
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
