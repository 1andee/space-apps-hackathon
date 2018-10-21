exports.seed = function(knex, Promise) {
  return knex('notifications').del()
    .then(function () {
      return knex('notifications').insert([
        { message: 'High blood pressure detected', read: 1 },
        { message: 'Sensor alert', read: 1 },
        { message: 'High heart rate detected' },
        { message: 'Sensor alert' }
      ]);
    });
};