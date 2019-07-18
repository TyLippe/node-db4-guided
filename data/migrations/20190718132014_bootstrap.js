
exports.up = function(knex) {
    // zoos, species, animals
    return knex.schema.createTable('zoos', tbl => {
        tbl.increments()

        tbl
            .string('zoo_name', 128)
            .notNullable()
            .unique();
        tbl
            .string('address', 256)
            .notNullable()
            .unique();
    })
    .createTable('species', tbl => {
        tbl.increments()

        tbl
            .string('species_name', 128)
            .notNullable()
            .unique()
    })
    .createTable('animals', tbl => {
        tbl.increments()

        tbl
            .string('animal_name').notNullable();

        tbl
            .integer('species_id')
            .unsigned()
            .notNullable()
            .referemces('id')
            .inTable('species')
            .onDelete('RESTRICT') // what happens if the species is deleted
            .onUpdate('CASCADE') // what happens if the id of the speices changes
    })
};

exports.down = function(knex) {

};
