
exports.up = function(knex, Promise) {
  return knex.schema.createTable('course', table => {
    table.increments('id').primary();
    table.text('code').notNullable();
    table.text('name').notNullable();
    table.text('start_date').notNullable();
    table.text('end_date').notNullable();
    table.text('timezone');
    table.integer('grade_scale').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('course');
};
