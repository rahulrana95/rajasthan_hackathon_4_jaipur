import express from 'express';
const router = express.Router();
const login = router.post('/login',function(request,response){
	let data = request.body.data;
	const db = request.app.locals.settings.db;
	const user = db.collection('user');
	let username = data.username;
	let password = data.password;
	user.find({username:username,password:password}).toArray((error,result)=>{
		if(error){
			response.json({
				status:404,
				error:error
			});
		} else {
			response.json({
				status:404,
				result:result
			});
		}
	});
	});

module.exports = login;
