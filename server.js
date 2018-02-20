var express = require('express');

var app = express();

const PORT = process.env.PORT || 8080;


app.listen(PORT, function(){

    console.log('app is running');

});

// app.get('/', function(req, res){

//     res.send('test');

// });

app.use(express.static('public'));

app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html');

});
