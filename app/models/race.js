//grab the mongoose module
var mongoose = require('mongoose')

//define the race model
//module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Race', {
    name : {type : String, default : ''},
    sport : {type : String, default : ''},
    location : {type : String, default : ''},
    date : {type : Date, default : Date.now()}
});
