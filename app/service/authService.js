const model = require('../model/auth');
const bcrypt = require('bcryptjs')
const oneSignal = require('../middleware/oneSignal');
exports.Register =(data)=>{
    return new Promise((resolve , reject)=>{
        const hash = bcrypt.hashSync(data.password , 10)
const details = {
    email:data.email,
    id: data.id
    }

    model.create(details).then(created =>{
        if(created){
            oneSignal.sendNotice(details.id)
            resolve({success:true , message:'Test successfull'})
        }else{
            resolve({success:false , message:'Test was not successfull !!!'})
        }
    }).catch(err =>{
        reject(err);
    })
    })
}