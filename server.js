var express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){

    console.log(`app is running on port ${PORT}`);

});

// app.get('/', function(req, res){

//     res.send('test');

// });

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html');

});
