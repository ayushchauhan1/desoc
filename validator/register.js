const validator = require('validator');
const isEmpty = require('../validator/is-empty');
module.exports = function validateRegisterInput(data){
 let errors ={};
 
 data.name = !isEmpty(data.name) ? data.name : '';
 data.email = !isEmpty(data.email) ? data.email : '';
 data.password = !isEmpty(data.password) ? data.password : '';
 data.password2 = !isEmpty(data.password2) ? data.password2 : ''; // password2 : which we used for confirmation
 data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : '';
 if(!validator.isLength(data.name,{min:2,max:30})){
     errors.name ='Name must be between 2 and 30 characters';
 }
 if(validator.isEmpty(data.name)){
     errors.name = 'Name field is requred';

 }
 if(validator.isEmpty(data.email)){
    errors.email = 'email field is requred';

}
if(validator.isEmpty(data.phonenumber)){
    errors.phonenumber= 'phonenumber field is requred';

}
if(!validator.isEmail(data.email)){
    errors.email = 'email field is invalid';

}

if(validator.isEmpty(data.password)){
    errors.password = 'Password field is requred';

}
if(!validator.isLength(data.password,{min: 6,max:30})){
    errors.password = 'password must have atleast 6 characters';

}
if(validator.isEmpty(data.password2)){
    errors.password2 = 'Confirm password field is requred';

}
if(!validator.equals(data.password,data.password2)){
    errors.password2 = 'Passwords must match';

}
 return{
     errors,
     isValid: isEmpty(errors)
 }
}
