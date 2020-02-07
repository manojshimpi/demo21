let app = require('express')(),
server = require('http').Server(app),
bodyParser = require('body-parser')
const api = require('./routers');
express = require('express'),
cors = require('cors'),
http = require('http'),
path = require('path');
//var proxy = require('http-proxy-middleware');

/*app.use(
    '/api',
    proxy({ target: 'http://www.google.com', changeOrigin: true })
  );*/

//let articleRoute = require('./Routes/article'),

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
 
app.use('/api',api);
 
app.use(function(err, req, res, next) {
    return res.send({ "statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG });
});
 
//app.use('/article', articleRoute);
app.use(cors()) // Use this after the variable declaration
 
// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
    next();
});

/*first API to check if server is running*/
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/demo21/index.html'));
})
 
 
server.listen(3000,function(){
console.log('app listening on port: 3000');
});
 