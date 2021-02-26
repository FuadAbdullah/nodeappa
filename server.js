// Load Node Modules
var express = require('express');
const ejs = require('ejs');

// Initalize Express
var app = express();

// Render static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
app.listen(3000);

// **** GET ROUTES - display pages ****
// Root Route
app.get('/', function (req, res){
    
    // Declaring a variable for demonstration purposes.

    var nama = "Muhammad Bruh bin Moment";

    // Rendering the index page
    res.render('pages/index', {
        // Passing the variable to front-end
        varName: nama
    });
});