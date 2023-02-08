const mongoose = require('mongoose')
const Movie = require('./movie')
const db = require('../../config/db')

const startMovies = [
    { 
        name: 'The Shawshank Redemption', 
        releaseDate: 1994, 
        rating: 'R',
        genre: 'Drama',
        length: 142, 
        watched: false
    },{ 
        name: 'The Dark Knight', 
        releaseDate: 2008, 
        rating: 'PG-13',
        genre: 'Action/Adventure',
        length: 152, 
        watched: true
    },{ 
        name: 'Inception', 
        releaseDate: 2010, 
        rating: 'PG-13',
        genre: 'Sci-fi/Mystery & thriller',
        length: 148, 
        watched: true
    },{ 
        name: 'Flight Club', 
        releaseDate: 1999, 
        rating: 'R',
        genre: 'Mystery & thriller/Drama',
        length: 139, 
        watched: true
    },{ 
        name: 'Forrest Gump', 
        releaseDate: 1994, 
        rating: 'PG-13',
        genre: 'Comedy/Drama',
        length: 144, 
        watched: true
    },{ 
        name: 'The Matrix', 
        releaseDate: 1999, 
        rating: 'R',
        genre: 'Sci-fi/Action',
        length: 136, 
        watched: false
    },{ 
        name: 'Star Wars: Episode IV - A New Hope', 
        releaseDate: 1977, 
        rating: 'PG',
        genre: 'Sci-fi/Adventure',
        length: 121, 
        watched: true
    },{ 
        name: 'The Godfather', 
        releaseDate: 1972, 
        rating: 'R',
        genre: 'Crime/Drama',
        length: 175, 
        watched: false
    },{ 
        name: 'Avengers: Endgame', 
        releaseDate: 2009, 
        rating: 'PG-13',
        genre: 'Action/Adventure',
        length: 181, 
        watched: true
    }
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