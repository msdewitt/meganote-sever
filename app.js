var express = require('express');//require imports a module into your project

var app = express(); // run the module

app.get('/', function(req,res){
  res.send('I love Express')
})//responding to a get request from a client then do this


app.listen(3030, function(){
  console.log('Listening on http://localhose:3030...')
}); //listen on a certain port
