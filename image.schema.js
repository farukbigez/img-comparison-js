const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
	encoding: String,
	mimetype: String,
	name: String,
	path: String,
	size: Number,
    buffer: String,
    hash:String
})


module.exports = mongoose.model('Image', imageSchema)