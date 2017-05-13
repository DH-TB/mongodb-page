let express = require('express');
let app = express();
let TaskItem = require('./app');

app.use(express.static('./'));

let i = -1;
app.get('/add',function (req,res,next) {
    i=i+1;
    TaskItem.find({}).skip(i).limit(1).exec((err, data) => {
        if (err) {
            return next(err);
        }
        res.send(data);
    })
});
app.get('/reduce',function (req,res,next) {
    i=i-1;
    TaskItem.find({}).skip(i).limit(1).exec((err, data) => {
        if (err) {
            return next(err);
        }
        res.send(data);
    })
});


const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('listening on port '+port);
});