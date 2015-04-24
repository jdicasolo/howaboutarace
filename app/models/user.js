var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var userSchema = mongoose.Schema({
    local : {
        email: String,
        name: String,
        password: String
    }
});

userSchema.methods.generateHash = function(password)
{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
};

//define the user model
//module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', userSchema);
