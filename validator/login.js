const validator = require('validator');
const isEmpty = require('../validator/is-empty');
module.exports = function validateLoginInput(data){
 let errors ={};
 

 data.email = !isEmpty(data.email) ? data.email : ''; // if this is null or undefined it convert it into empty string : because validator checks only empty string
 data.password = !isEmpty(data.password) ? data.password : '';
 
 if(!validator.isEmail(data.email)){
    errors.email = 'email field is invalid';

}

 if(validator.isEmpty(data.email)){
    errors.email = 'email field is requred';

}

if(validator.isEmpty(data.password)){
    errors.password = 'Password field is requred';

}

 return{
     errors,
     isValid: isEmpty(errors)
 }
}
