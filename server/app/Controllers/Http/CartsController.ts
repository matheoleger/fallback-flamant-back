import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart';
import CreateCartValidator from 'App/Validators/CreateCartValidator';

export default class CartsController {

    async getCart({request, response}: HttpContextContract) {
        const user = await Cart.findOrFail(request.param('id'));
        return response.json(user);
    }

    async getAllUsers({response}: HttpContextContract) {
        const users = await Cart.all()
        return response.json(users)
    }

    async createUser({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateCartValidator);
        const user = await Cart.create(payload);
        return response.json(user);
    }

    async updateUser({request, response}: HttpContextContract) {
        const payload = await request.validate(CreateCartValidator);
        const user = await Cart.updateOrCreate({ id_cart: request.param('id') }, payload);
        return response.json(user);
    }

    async deleteUser({request, response}: HttpContextContract) {
        const user = await Cart.findOrFail(request.param("id"));
        await user.delete();
        return response.json({ data: user });
    }
}
