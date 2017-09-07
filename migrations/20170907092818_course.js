
exports.up = function(knex, Promise) {
  return knex.schema.createTable('course', table => {
    table.increments('id').primary();
    table.text('code').notNullable();
    table.text('name').notNullable();
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.text('timezone');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('course');
};
