var express = require('express');
var app = express();
var path = require('path');


app.set('view engine', 'ejs');
app.use( express.static( "public" ) );



// app.use('/', express.static(__dirname + '/www')); 
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// index page
app.get('/', function(req, res) {
    res.render('page/student');
});



app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

