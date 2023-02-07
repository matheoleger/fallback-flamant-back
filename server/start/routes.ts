/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/cart', 'CartsController.getAllUsers')

Route.group(() => {
  Route.get('/', 'UsersController.getAllUsers')
  Route.get('/:id', 'UsersController.getUser')
  Route.post('/', 'UsersController.createUser')
  Route.put('/:id', 'UsersController.updateUser')
  Route.delete('/:id', 'UsersController.deleteUser')
}).prefix('/users')

Route.group(() => {
  Route.get('/', 'CartsController.getAllUsers')
  Route.get('/:id', 'CartsController.getUser')
  Route.post('/', 'CartsController.createUser')
  Route.put('/:id', 'CartsController.updateUser')
  Route.delete('/:id', 'CartsController.deleteUser')
}).prefix('/carts')

Route.group(() => {
  Route.get('/', 'ArticlesController.getAllArticles')
  Route.get('/:id', 'ArticlesController.getArticle')
  Route.post('/', 'ArticlesController.createArticle')
  Route.put('/:id', 'ArticlesController.updateArticle')
  Route.delete('/:id', 'ArticlesController.deleteArticle')
}).prefix("/articles")
