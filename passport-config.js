const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const User = require("./models/UserModel");
const passport = require('passport');



module.exports = function(passport)
{
  passport.use(
    new LocalStrategy({usernameField: "email"}, (email, password, done) =>
    {
      User.findOne({email: email})
        .then(user => 
          {
            if (!user)
            {
              return done(null, false, { message: "Sähköpostiosoitetta ei ole rekisteröity"});
            }

            bcrypt.compare(password, user.password, (err, isMatch) => 
            {
              if(err) throw err;
              if(isMatch)
              {
                console.log("AAAAAAAAAA" + user.id)
                return done(null, user);
              }
              else
              {
                return done(null, false, {message: "Väärä salasana"});
              }
            })
          })
        .catch(err => console.log(err))
    })
  )
}

passport.serializeUser(function(user, done)
{
  console.log("BBBBBBBBBBBB" + user.id)
  done(null, user.id);
})

passport.deserializeUser(function(id, done)
{
  User.findById(id, function(err, user)
  {
    done(err, user);
  })
})