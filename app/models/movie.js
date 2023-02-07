//// DEPENDENCIES ////

const mongoose = require('mongoose')

//// SCHEMA ////

const movieSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		releaseDate: {
			type: Date,
			required: true,
		},
        length: {
            type: Number,
            required: true
        },
        watched: {
            type: Boolean,
            required: true
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
	{
		timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
	}
)

//// VIRTUALS ////



//// EXPORT ////

module.exports = mongoose.model('Movie', movieSchema)
