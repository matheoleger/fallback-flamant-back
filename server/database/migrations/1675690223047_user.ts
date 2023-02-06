import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class User extends BaseSchema {
    protected tableName = 'user'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_user')
            table.integer('role').notNullable()
            table.string('username').notNullable()
            table.string('password').notNullable()
            table.string('firstname').notNullable()
            table.string('lastname').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
