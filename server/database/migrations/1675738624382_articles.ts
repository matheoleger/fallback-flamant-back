import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Articles extends BaseSchema {
    protected tableName = 'articles'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_article')
            table.string('name').notNullable()
            table.bigInteger('price').notNullable()
            table.text('description').notNullable()
            table.timestamps()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}