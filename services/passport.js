const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecretID,
    callbackURL: "/auth/google/callback"

},(accessToken,refreshToken,profile,done)=>{
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
}))