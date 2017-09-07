
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE course RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('course').insert([
        {code: 'ART206', name: 'Drawing Concepts 2', start_date: '20170911', end_date: '20180427', timezone: 'America/Creston', grade_scale: 5},
        {code: 'ART293', name: 'Printmaking 2', start_date: '20170911', end_date: '20180427', timezone: 'America/Creston', grade_scale: 5},
        {code: 'ENG100', name: 'Beginner Composition', start_date: '20170911', end_date: '20180427', timezone: 'America/Creston', grade_scale: 5}
      ]);
    });
};
