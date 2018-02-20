var express = require('express');

var app = express();

app.listen(3000, function(){

    console.log('app is running');

});

// app.get('/', function(req, res){

//     res.send('test');

// });

app.use(express.static('public'));

app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html');

});
