
exports.up = function(knex, Promise) {
  return knex.schema.createTable('enrollment', table => {
    table.increments('id').primary();
    table.integer('course_id').unsigned().notNullable();
    table.foreign('course_id').references('course.id');
    table.integer('account_id').unsigned().notNullable();
    table.foreign('account_id').references('account.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('enrollment');
};
