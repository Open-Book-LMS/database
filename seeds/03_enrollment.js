
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE enrollment RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('enrollment').insert([
        {course_id: 1, account_id: 1},
        {course_id: 1, account_id: 3},
        {course_id: 1, account_id: 4},
        {course_id: 1, account_id: 5},
        {course_id: 1, account_id: 6},
        {course_id: 1, account_id: 7},
        {course_id: 2, account_id: 2},
        {course_id: 2, account_id: 3},
        {course_id: 2, account_id: 4},
        {course_id: 3, account_id: 2},
        {course_id: 3, account_id: 5},
        {course_id: 3, account_id: 6}
      ]);
    });
};
