import express from 'express';
import path from 'path';
import webpack from 'webpack';
import mongodb from 'mongodb';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import webpackConfigDev from '../webpack.config.dev.js';
import webpackConfigProd from '../webpack.config.prod.js';
import route from './routes/index.js';
import config from '../configurations/config.js';

var MongoClient = require('mongodb').MongoClient;
const router = express.Router();
let app = express();
let compiler = {};
let webpackConfig = {};


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if(process.env.mode == 'PROD') {
	compiler = webpack(webpackConfigProd);
	webpackConfig = webpackConfigProd;
	console.log('Running in production mode...');
} else {
	compiler = webpack(webpackConfigDev);
	webpackConfig = webpackConfigDev;
	console.log('Running in development mode...');
}


MongoClient.connect(config.mongodb.host+':'+config.mongodb.port, function (err, database) {
     if(err) throw err;
     const mydb = database.db('hack');
    app.set('db',mydb);
});


for (var x in route ){
	app.use('/api',require(path.join(__dirname+'/routes/',route[x])));
}

app.use(webpackMiddleware(compiler,{
  hot: true,
  publicPath : webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,'../public/index.html'));
});



app.listen(3333,()=>{
  console.log('Running Local Server at Port: ' + 3333);
});
