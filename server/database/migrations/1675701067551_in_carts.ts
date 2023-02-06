import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InCart extends BaseSchema {
    protected tableName = 'in_carts'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_in_cart')
            table.bigInteger('cart').notNullable().references('carts.id_cart').onDelete('CASCADE')
            table.bigInteger('article').notNullable().references('articles.id_article').onDelete('CASCADE')
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
