const express = require('express')
const passport = require('passport')
const Movie = require('../models/movie')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// CREATE
// POST /actors/:movieId
router.post('/actors/:movieId', removeBlanks, (req, res, next) => {
	const actor = req.body.actor
    const movieId = req.params.movieId
    Movie.findById(movieId)
        .then(handle404)
        .then(movie => {
            console.log('the movie: ', movie)
            console.log('the actor: ', actor)
            movie.actors.push(actor)
            return movie.save()
        })
        .then(movie => res.status(201).json({ movie: movie }))
        .catch(next)
})

// UPDATE
// PATCH /actors/:movieId/:actorId
router.patch('/actors/:movieId/:actorId', requireToken, removeBlanks, (req, res, next) => {
	const movieId = req.params.movieId
    const actorId = req.params.actorId
    Movie.findById(movieId)
        .then(handle404)
        .then(movie => {
            const theActor = movie.actors.id(actorId)
            requireOwnership(req, movie)
            theActor.set(req.body.actor)
            return movie.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DESTROY
// DELETE /actors/:movieId/:actorId
// router.delete('/actors/:movieId/:actorId', requireToken, (req, res, next) => {
// 	const movieId = req.params.movieId
//  const actorId = req.params.actorId
// })

module.exports = router
