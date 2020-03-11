const service = require('../service/authService')

module.exports = function authController(){
    this.register = (req,res)=>{
        service.Register(req.body).then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    }
}