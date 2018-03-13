var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');

/////////////////////////////////////////////
var admin = require('firebase-admin');
var serviceAccount = require('./test-database-ccc1c-firebase-adminsdk-n28nx-f2c652b48f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://test-database-ccc1c.firebaseio.com/'
});

var db = admin.database();
var ref = db.ref("switches");
var usersRef = ref.child("first");
/////////////////////////////////////////////

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

app.get('/home', function(req, res){

    res.render('home.hbs',{

        pageTitle: 'Home Page',
        currentYear : new Date().getFullYear(),

    });

});

app.get('/posttest', function(req, res){

    res.render('posttest.hbs');

});

app.post('/posttest', urlencodedParser, function(req, res){

  console.log(req.body.test);

  if(req.body.test == 'true'){

    usersRef.update({
      pressed: true
    });

  }else if(req.body.test == 'false'){

    usersRef.update({
      pressed: false
    });

  }else{

    console.log("Invalid entry");

  }

  res.render('posttest.hbs');

});
