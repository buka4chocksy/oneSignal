var express = require('express');
var app = express();
var morgan = require('morgan');
var cookieparser = require('cookie-parser');
require('dotenv').config();
var compression = require('compression');
var router = express.Router();
var rootRouter = require('./app/routes/index')(router);
var cors = require('cors');
// const _user = require('./app/Model/user');
const ObjectId = require('mongoose').Types.ObjectId;

//cronjb

//middleware
app.use(compression());
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(cors());
app.use('/api', rootRouter);

// app.get('/', function (req, res) {
//     console.log(req.body.Ids.map(e => ObjectId(e)))
//     _user.find({
//         '_id': {
//             $in: ['5e52dac65bb54de698191bcd']
//         }
//     }, (err, docs) => {
//         res.json({ docs, message: "hello world" });
//     })
// });
app.get('/', function (req, res) {
 
        res.json({ message: "hello world" });
});

console.log('set up successfull !!')

module.exports = app;



