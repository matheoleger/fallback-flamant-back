import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class User extends BaseSchema {
    protected tableName = 'users'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id_user')
            table.integer('role').notNullable()
            table.string('email').notNullable().unique()
            table.string('password').notNullable()
            table.string('firstname')
            table.string('lastname')
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
