const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const gravatar =require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
//load input validation
const validateRegisterInput = require('../../validator/register');
const validateLoginInput = require('../../validator/login');

router.get('/test',(req,res)=> res.json({msg: "user works"}));

router.post('/register',(req,res)=>{
    const { errors, isValid}= validateRegisterInput(req.body);
    //check validation
    if(!isValid)
    { 
        return res.status(400).json(errors);

    }
User.findOne({email: req.body.email})
.then(user=> {
    if(user){
        return res.status(400).json({email: 'Email already exists'});

    }
    else{
        const avatar = gravatar.url(req.body.email,{
            s: '200', //size
            r: 'pg',//Rating
            d: 'mm' // default
        });
        const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        phonenumber: req.body.phonenumber

        }
        );
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;
                newUser.password =hash;
                newUser
                 .save()
                 .then(user=> res.json(user))
                 .catch(err=> console.log(err));
            });
        });
    }

})
});
// router for JWT/returning  tokens
// user login
//acess public
router.post('/login',(req,res)=>{
    const { errors, isValid}= validateLoginInput(req.body);
    //check validation
    if(!isValid)
    { 
        return res.status(400).json(errors);

    }
    const email = req.body.email;
    const password = req.body.password;

    //find user by email
    User.findOne({email}).then(user=>{
        if(!user)
        {   errors.email = 'User not found';
            return res.status(404).json(errors);
        }
        //check password
        bcrypt.compare(password,user.password).then(ismatch=>{
            if(ismatch)
            {
              // sucessfully matched
              const payload ={id: user.id,name: user.name, avatar: user.avatar};
              //sign token
              jwt.sign(
                  payload,keys.secretOrKey,
                  {expiresIn: 36000},
                  (err,token)=>{
                      res.json({
                          sucess: true,
                          token: 'Bearer ' + token
                      });


                  }

              );

            }
            else{
                errors.password = 'Password incorrect'
                return res.status(404).json(errors);
            }
        });
    
    });

});
// route get api/users/current
// return current user
// private
router.get('/current',passport.authenticate('jwt',{session: false}),(req,res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email

    });
});

module.exports = router;