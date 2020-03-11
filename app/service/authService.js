const model = require('../model/auth');
const bcrypt = require('bcryptjs')
const oneSignal = require('../middleware/oneSignal');
exports.Register =(data)=>{
    return new Promise((resolve , reject)=>{
const details = {
    email:data.email,
    id: data.id
    }

    oneSignal.sendNotice(details.id)
    .then((res)=>{
        resolve({success:true , message:'Test successfull'})
    })
    .catch((err)=>{
        reject({success:false , message:'Test failed' , err:err})
    }
    )
      
  
    })
}