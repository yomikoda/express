var app = require('express')();
var http = require('http').Server(app);

app.get('/page', function(req, res){
  res.sendFile(__dirname + '/tmpl/html/page.html');
});

http.listen(1337, function(){
  console.log('listening on *:1337');
});
