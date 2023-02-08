//// DEPENDENCIES ////

const mongoose = require('mongoose')
const actorSchema = require('./actor')

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
        actors: [actorSchema],
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
movieSchema.virtual('fullTitle').get(function () {
    return `${this.name} (${this.releaseDate.getFullYear()})`
})


//// EXPORT ////

module.exports = mongoose.model('Movie', movieSchema)
