const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();

let Marks = [{lat: 49.23, lng: 28.47}];

app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index',{mess : ['hello','world']});
});

app.get('/new', function(req, res){
	console.log('new ' + req.query.lat + ' ' + req.query.lng);
	Marks[Marks.length] = {lat : parseFloat(req.query.lat), lng :parseFloat( req.query.lng)};
	
});

app.get('/getmarks', function(req, res){
	console.log(')');
	res.send(Marks);
});

app.listen(3000);