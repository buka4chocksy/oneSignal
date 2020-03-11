var authController = require('../contoller/authController');
// var middleware = require('../Middleware/AuthMiddleware');
var router = require('express').Router();

module.exports = function(){
    const authCtrl = new authController();
    router.post('/register', authCtrl.register);


    return router;
}