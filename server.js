// DEPENDENCIES =============================================
var express = require ("express");
var bodyParser = require ("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();

app.get('/', function (req, res){
    res.send('Hello World!')
});



// PARSE application/json ===================================
app.use(bodyParser.json());

// PARSE application/x-www-form-urlencoded ==================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vdn.api+json"}));

// API Routes ===============================================
app.use('/api/friends?', require("./app/routing/apiRoutes"));

// HTML Routes ==============================================
app.use('/', require('./app/routing/htmlRoutes'));
app.use('/survey', require('./app/routing/htmlRoutes'));



// START SERVER TO BEGIN LISTENING ==========================
app.listen(PORT, function(){
    console.log('App listening on PORT' + PORT);
});