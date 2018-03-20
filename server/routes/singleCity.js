import express from 'express';
const router = express.Router();
const dummy = router.get('/city/:id',function(request,response){
	let data = request.params.id;
	const db = request.app.locals.settings.db;
  const ObjectId = request.app.locals.settings.ObjectId;
	const city = db.collection('city');
  let newone = new require('mongodb').ObjectID(data.toString());

  console.log(newone);
	city.find({_id:data}).toArray((error,result)=>{
		if(error){
			response.json({
				status:404,
				error:error
			});
		} else {

      city.update(
          { _id: result[0]['_id'] },
          { $set:
            {
              views: result[0]['views']+1
            }
          },(err11,res11)=>{
           if(err11){
             response.json({
       				status:404,
       				result:err11
       			});
           } else{
             response.json({
       				status:200,
       				result:result
       			});
           }
          }
          )


		}
	});
	});

module.exports = dummy;
