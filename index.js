/*
	Ignore this nerdy stuff for now
*/
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) require('dotenv').config({ path:envPath }); // eslint-disable-line

// Fancy handlebars templates. To be used later on.
var exphbs  = require('express-handlebars');
app.engine('.hbs', exphbs({ extname: '.hbs '}));
app.set('view engine', '.hbs');

// More nerdy stuff you can ignore
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())


/*
	OK. Start to pay attention here.

	Start API router see ApiRouter file.
*/
var apiRouter = require('./server/routers/ApiRouter')(express, app);
app.use('/api/1.0', apiRouter);



// ignore again for now
app.get('/', function (req, res) {
  res.render('home');
});




// keep on ignoring nothing to see here
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
  console.log('------------------');
  console.log('🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕');
  console.log('🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥');
  console.log('😴 😴 😴 😴 😴 😴 😴 😴 😴 😴 😴');
  console.log('------------------');
  console.log('Visit: http://localhost:3000');
});
