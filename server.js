var express = require('express');
var hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){

    console.log(`app is running on port ${PORT}`);

});


app.get('/', function(req, res){

    res.render('index.hbs',{

        pageTitle: 'Index Page',
        currentYear : new Date().getFullYear()
    });

});

app.get('/home/:test', function(req, res){
    
    res.render('home.hbs', {

        pageTitle: 'Home Page',
        currentYear : new Date().getFullYear(),

    });

});
