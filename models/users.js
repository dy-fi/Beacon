const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

// CREATE MONGOOSE MODEL
const UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    goingTo: {
        type: Schema.Types.ObjectId,
        ref: 'goingTo'
    },
})

// HASH THE PASSWORD BEFORE SAVING
UserSchema.pre('save', function(next) {
    var user = this

    // only hash the password if it's new
    if (!this.isModified('password')) return next()

    //hash password with autogenerated salt
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

// Authenticate input on database
UserSchema.statics.authenticate = function(email, password, next) {
    this.findOne({ email: email }, function(err, user) {
        if(err) return next(err)
        if(!user) return next(null, null, 'Email not found. Maybe you mistyped something?')

        bcrypt.compare(password, user.password, function(err, res) {
            if(err) return next(err)
            if(res) {
                return next(null, user)
            } else{
                return next(null, null, 'Invalid Password. Please try again!')
            }
        })
    })
}

// EXPORT MODEL
module.exports = mongoose.model('User', UserSchema)
