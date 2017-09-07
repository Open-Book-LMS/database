
exports.up = function(knex, Promise) {
  return knex.schema.createTable('enrollments', table => {
    table.increments('id').primary();
    table.integer('course_id').unsigned().notNullable();
    table.foreign('course_id').references('course.id');
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('user.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('enrollments');
};
