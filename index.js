const express = require('express');
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();


// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
// }))

app.get('/',function(req,res){
    res.send({hi:'sdf'})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT)