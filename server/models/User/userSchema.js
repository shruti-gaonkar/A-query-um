const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');

// Define userSchema
const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    username: String
})
// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: pass => {
        return bcrypt.hashSync(pass, 10)
    }
}
// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        //console.log('UserSchema js =======NO PASSWORD PROVIDED=======')
        next();
    } else {
        //console.log('UserSchema js ======== hashPassword in pre save');
        this.password = this.hashPassword(this.password);
        next();
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User;