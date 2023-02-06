import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InCart extends BaseSchema {
    protected tableName = 'in_cart'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_in_cart')
            table.bigInteger('cart').notNullable()
            table.bigInteger('article').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
