var mongoose = require( 'mongoose' )

const userSchema = { name: String, email: String, password: Number }

const Users = mongoose.model( 'User', userSchema );

module.exports = Users