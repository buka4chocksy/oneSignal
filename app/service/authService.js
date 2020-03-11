const model = require('../model/auth');
const bcrypt = require('bcryptjs')
exports.Register =(data)=>{
    return new Promise((resolve , reject)=>{
        const hash = bcrypt.hashSync(data.password , 10)
const details = {
    fullName:data.fullName,
    email:data.email,
    password:hash
    }
    model.create(details).then(created =>{
        if(created){
            resolve({success:true , message:'Registration successfull'})
        }else{
            resolve({success:false , message:'Registration was not successfull !!!'})
        }
    }).catch(err =>{
        reject(err);
    })
    })
}