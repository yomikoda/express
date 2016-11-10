var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/js', express.static('assets/js'));
app.use('/css', express.static('assets/css'));

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('/test', function(req, res){
  res.send('<h1>Hello TEST</h1>');
});

app.get('/page', function(req, res){
  res.sendFile(__dirname + '/tmpl/page.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
