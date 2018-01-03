// DEPENDENCIES =============================================
var express = require ("express");
var bodyParser = require ("body-parser");


var PORT = process.env.PORT || 3000;
var app = express();

// PARSE application/json ===================================
app.use(bodyParser.json());

// PARSE application/x-www-form-urlencoded ==================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vdn.api+json"}));

// HTML Routes ==============================================
require('./app/routing/htmlRoutes')(app);
// API Routes ===============================================
require('./app/routing/apiRoutes')(app);

// START SERVER TO BEGIN LISTENING ==========================
app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT);
});