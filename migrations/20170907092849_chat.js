
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chat', table => {
    table.increments('id').primary();
    table.text('message').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chat');
};
