const express = require('express');
const router = express.Router();

const passport = require('passport'); // passport use for protected routes
const validateProfileInput = require('../../validator/profile');

//load profile models
const Profile = require('../../models/Profile');

//Load user models
const User = require('../../models/User');

//get api/profile/test
router.get('/test',(req,res)=>res.json({msg: 'Profile works'}));

// -----------------NOT WORKING-------------------------//

//  Get api/profile
// private
// router.get('/',passport.authenticate('jwt',{session: false}),(req,res)=> {
//     //Get fields through form
//    const errors = {};

//     Profile.findOne({ user: req.user.id})
//     .populate('users',['name','avatar'])
//     .then(profile =>{
//         if(!profile)
//         {
//             errors.noprofile = 'There is no profile for this user';
//             return ress.status(404).json(errors);

//         }
//         req.json(profile);

//     })
//     .catch(err=> res.status(404).json(err));
// });

// -----------------NOT WORKING-------------------------//


// GET api/profile/handle/:handle
// it gives profile by handle
// PUBLIC
router.get('/handle/:handle',(req,res)=>{
const errors ={};

Profile.findOne({ handle : req.params.handle})
.populate('users',['name','avatar'])
  .then(profile=>{
     if(!profile){
         errors.noprofile = 'There is no profile for this user';
         res.status(404).json(errors);

     }
     res.json(profile);
 })
 .catch(err => res.status(404).json(err));

});

//create / update user profile

router.post('/',passport.authenticate('jwt',{session: false}),(req,res)=> {
    
    const {errors , isValid} = validateProfileInput(req.body);
    

    // check validation 
    if(!isValid){
        return res.status(400).json(errors);
    }

    const profileFields = {};
    profileFields.user = req.user.id; // Id not come from form
    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.bio) profileFields.bio = req.body.bio;
    if(req.body.status) profileFields.status = req.body.status;
    //skills array of skills seprated by comma
    if(typeof req.body.skills!= 'undefined'){
        profileFields.skills = req.body.skills.split(',');

    } 
    // social , we have to define the social. beacuse social is an object
    profileFields.social = {};
    
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    
    Profile.findOne({user : req.user.id}).then(profile =>{
      if(profile)
      {
          //update
          Profile.findOneAndUpdate(
              {user: req.user.id},
              {$set: profileFields},
              {new: true}
          )
          .then(profile => res.json(profile));
      }
      else{
          //create

          // check if handle exists
          Profile.findOne({handle : profileFields.handle})                
          .then(profile=>{
          if(profile){
              errors.handle = 'That handle already exists';
              res.status(400).json(errors);
          }

          //save profile
          new Profile(profileFields).save().then(profile=> res.json(profile));

          });

      }
    });
    
 

});



module.exports = router;


