const User = require('../models/User.model');

module.exports = (router) => {
    router.post('/register',(req,res) => {
        console.log('Body: ' + req.body.email);
        if (!req.body.email){
            res.json({success:false,message:'You Must Provide An Email'});
        } else {
            if (!req.body.username){
                res.json({success:false,message:'You Must Provide A Username'});
            } else {
                if (!req.body.password){
                    res.json({success:false,message:'You Must Provide A Password'});
                } else {
                    //success!
                    let user = new User({
                        username:req.body.username.toLowerCase(),
                        email:req.body.email.toLowerCase(),
                        password:req.body.password,
                        role:req.body.role
                    });
                    user.save((err) => {
                        if (err){
                            if (err.code === 11000){
                                res.json({success:false,message:'Username Or Email Already Exists.'});
                            } else {
                                if (err.errors){
                                    if (err.errors.username){
                                        res.json({success:false,message:err.errors.username.message});
                                    } else {
                                        console.log(err);
                                        res.json({success:false,message:'Error Saving User'});
                                    }
                                } else {
                                    res.json({success:false,message:'Could Not Save User. Error: ', err});
                                }
                                
                            }
                        } else {
                            res.json({success:true,message:'Account Registered, Homie.'});
                        }
                    });
                }
            }
        }
    });
    return router;
}