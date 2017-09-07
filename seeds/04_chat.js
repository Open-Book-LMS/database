
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE chat RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {message: "Hi!"}
      ]);
    });
};
