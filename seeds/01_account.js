const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE account RESTART IDENTITY CASCADE;')
    .then(function () {
      const salt = bcrypt.genSaltSync(saltRounds);
      return knex('account').insert([
        {email: 'kjimenez@awesome.com', password: bcrypt.hashSync('demopassword', salt), first_name: 'Kathryn', last_name: 'Jimenez', type: 'instructor', grade: 0, timezone: 'America/Creston'},
        {email: 'taguilar@awesome.com', password: bcrypt.hashSync('demopassword', salt), first_name: 'Thomas', last_name: 'Aguilar', type: 'instructor', grade: 0, timezone: 'America/Creston'},
        {email: 'wellsmil@awesome.com', password: bcrypt.hashSync('demopassword', salt), first_name: 'Mildred', last_name: 'Wells', type: 'student', grade: 0, timezone: 'America/Creston'},
        {email: 'roymic@awesome.com', password: bcrypt.hashSync('demopassword', salt), first_name: 'Micheal', last_name: 'Roy', type: 'student', grade: 0, timezone: 'America/Creston'},
        {email: 'hendersonlog@awesome.com', password: bcrypt.hashSync('demopassword', salt), first_name: 'Logan', last_name: 'Henderson', type: 'student', grade: 0, timezone: 'America/Creston'},
        {email: 'petersmau@awesome.com', password: bcrypt.hashSync('demopassword', salt), first_name: 'Maude', last_name: 'Peters', type: 'student', grade: 0, timezone: 'America/Creston'},
        {email: 'barrettric@awesome.com', password: bcrypt.hashSync('demopassword', salt), first_name: 'Ricardo', last_name: 'Barrett', type: 'student', grade: 0, timezone: 'America/Creston'}
      ]);
    });
};
