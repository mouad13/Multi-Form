var express = require('express');
var bodyParser = require('body-parser');



var app = express();




app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname+ '/'));

app.get('/', function(req, res){
	

	res.render('index.jade', {} );
	console.log('youpiii');

});

app.post('/signup1', function(req, res){

	


	console.log('tralali tralala')
});







app.listen(3300, function () {
	console.log('posqkdpok');

})
