exports.up = function(knex, Promise) {
    return knex.schema.createTable('notifications', function (table) {
        table.increments();
        table.string('message');
        table.integer('read').defaultTo(0);
        table.timestamp('timestamp').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notifications');
};
