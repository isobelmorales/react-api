# Movie API

This API will allow the users of our react front-end application to CRUD movies and their actors. 

This application uses token authentication instead of sessions. 

## Resources

### Movies

##### Routes Table

| Verb   | URI Pattern    | Controller#Action |
|--------|----------------|-------------------|
| GET    | `/movies`      | `movies#index`    |
| GET    | `/movies/:id`  | `movies#show`     |
| POST   | `/movies`      | `movies#create`   |
| PATCH  | `/movies/:id`  | `movies#update`   |
| DELETE | `/movies/:id`  | `movies#delete`   |

### Users

#### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### Actors

##### Routes Table

| Verb   | URI Pattern                  | Controller#Action |
|--------|------------------------------|-------------------|
| POST   | `/actors/:movieId`           | `actors#create`   |
| PATCH  | `/actors/:movieId/:actorId`  | `actors#update`   |
| DELETE | `/actors/:movieId/:actorId`  | `actors#delete`   |