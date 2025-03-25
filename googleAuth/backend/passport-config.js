const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
            user = await User.create({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return done(null, { user, token });
    } catch (error) {
        return done(error, false);
    }
}));

module.exports = passport;
