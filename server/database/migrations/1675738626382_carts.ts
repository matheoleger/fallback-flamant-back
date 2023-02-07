import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Carts extends BaseSchema {
    protected tableName = 'carts'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_cart')
            table.bigInteger('user').notNullable()
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
