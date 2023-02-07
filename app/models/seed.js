const mongoose = require('mongoose')
const Movie = require('./movie')
const db = require('../../config/db')

const startMovies = [
    { name: 'Sound of Music', releaseDate: new Date(2022, 1, 5), length: 123, watched: true },
    { name: 'LOL', releaseDate: new Date(2023, 1, 10), length: 45, watched: true },
    { name: 'Avengers', releaseDate: new Date(2010, 2, 4), length: 90, watched: true },
    { name: 'Movie 3', releaseDate: new Date(2020, 4, 15), length: 120, watched: true },
    { name: 'Movie 4', releaseDate: new Date(2013, 5, 22), length: 75, watched: true },
]

mongoose.connect(db, {
    useNewUrlParser: true
})

    .then(() => {
        Movie.deleteMany()
            .then(deletedMovies => {
                console.log('the deleted movies', deletedMovies)
                Movie.create(startMovies)
                    .then(newMovies => {
                        console.log('the new movies', newMovies)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })