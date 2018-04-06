const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let validUsername = (username) => {
    if (!username){
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
}

const usernameValidators = [
    {
        validator:validUsername,
        message:'Username Must Only Contain Letters and Numbers.'
    }
]

const userSchema = new schema({
    email: {type:String,required:true,unique:true,lowercase:true},
    username: {type:String,required:true,unique:true,lowercase:true,validate:usernameValidators},
    role:{type:String,required:true},
    password:{type:String,required:true}
});

userSchema.pre('save',function (next){
    if (!this.isModified('password')){
        return next();
    }
    bcrypt.hash(this.password,null,null,(err,hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});
userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password,this.password);
}
module.exports = mongoose.model('User',userSchema);