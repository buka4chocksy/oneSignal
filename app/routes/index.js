var authRoutes = require('./authRoutes');

module.exports = function (router) {
    router.use('/auth',authRoutes())
    return router;
}