const express = require('express');
const app =express();
const mongoose = require('mongoose')
const user = require('./routes/api/users');
const profile =require('./routes/api/profile');
const post = require('./routes/api/post');
const bodyparser = require('body-parser');
const passport = require('passport');
//body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//db config
const db = require('./config/keys').mongoURI;
 mongoose
 .connect(db, {useNewUrlParser: true,useUnifiedTopology: true})
 .then(()=> console.log('Mongoose connected'))
 .catch(err => console.log(err));
 mongoose.set('useFindAndModify', false);

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//routes
app.use('/api/users',user);
app.use('/api/post',post);
app.use('/api/profile',profile);

//Port
const port = process.env.port || 5000;
app.listen(port,()=> console.log(`server running at ${port}`));

