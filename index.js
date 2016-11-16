var express = require('express');
var app = express();
var apiRouter = require('./server/routers/ApiRouter')(express, app);

app.use('/api/1.0', apiRouter);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
