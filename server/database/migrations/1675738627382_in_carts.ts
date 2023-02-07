import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InCarts extends BaseSchema {
    protected tableName = 'in_carts'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_in_cart')
            table.bigInteger('cart').notNullable()
            table.bigInteger('article').notNullable()
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
