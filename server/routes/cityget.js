import express from 'express';
const router = express.Router();
const dummy = router.get('/city',function(request,response){
	let data = request.body.data;
	const db = request.app.locals.settings.db;
	const city = db.collection('city');
	city.find().toArray((error,result)=>{
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
