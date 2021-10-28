
exports.up = function(knex) {
   return knex.schema.createTable('mains', table => {
    table.increments('id').primary()
    table.string('name')
    table.text('recipes')
})};

exports.down = function(knex) {
  return knex.schema.dropTable('mains')
};
