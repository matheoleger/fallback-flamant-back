import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cart extends BaseSchema {
    protected tableName = 'cart'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_cart')
            table.bigInteger('user').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
