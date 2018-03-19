import express from 'express';
const router = express.Router();
const signup = router.post('/signup',function(request,response){
	let data = request.body.data;
	const db = request.app.locals.settings.db;
	const user = db.collection('user');

	if(data.username == 'undefined' ||  data.password== 'undefined' ||  data.name== 'undefined' ||  data.profilePic== 'undefined' || data.live== 'undefined'){
		response.json({
			status:404,
			error:"Not sufficient data"
		});
		return ;
	}

	user.insertOne({username:data.username,password:data.password,name:data.name,profilePic:data.profilePic,live:data.live,createdAt:new Date()},(error,result)=>{
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

module.exports = signup;
