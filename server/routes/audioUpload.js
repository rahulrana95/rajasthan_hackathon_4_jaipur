import express from 'express';
const router = express.Router();
const dummy = router.post('/audioUpload',function(request,response){
	let data = request.body.data;
	const db = request.app.locals.settings.db;
	const city = db.collection('city');

	     console.log(data);
			response.json({
				status:200,
				result:'done'
      });
	});

module.exports = dummy;
