//// DEPENDENCIES ////

const mongoose = require('mongoose')
const actorSchema = require('./actor')

//// SCHEMA ////

const movieSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		releaseDate: {
			type: Number,
			required: true
		},
        rating: {
            type: String, 
            enum: ['G', 'PG', 'PG-13', 'R', 'Unrated']
        },
        genre: {
            type: String,
            required: true
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
    return `${this.name} (${this.releaseDate})`
})
movieSchema.virtual('canWatchInHour').get(function () {
    if (this.length < 60) {
        return `You can watch this movie in an hour`
    } else if (this.length > 60) {
        return `You cannot watch this movie in an hour. You need more time!`
    }
})


//// EXPORT ////

module.exports = mongoose.model('Movie', movieSchema)
