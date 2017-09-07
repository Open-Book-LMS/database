
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
    table.text('first_name');
    table.text('last_name');
    table.text('type');
    table.float('grade').unsigned();
    table.text('timezone');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
