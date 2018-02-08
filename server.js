var express = require('express');

var app = express();

var server = app.listen(3000);

app.use(express.static('public'));

<<<<<<< HEAD
console.log("My socket server is running");
=======
console.log("My socket server is running");
>>>>>>> f3b66d983e7697b0766071d826c8783140d7efe3
