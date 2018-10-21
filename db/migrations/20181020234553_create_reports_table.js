exports.up = function(knex, Promise) {
    return knex.schema.createTable('reports', function (table) {
        table.specificType('timestamp', 'bigint').primary();
        table.integer('heartRate').nullable();
        table.integer('heartRateQuality').nullable();
        table.float('coreTemp').nullable();
        table.float('activityIntensity').nullable();
        table.float('actigraphy').nullable();
        table.float('breathingRate').nullable();
        table.integer('cadence').nullable();
        table.float('minute_ventilation_adj').nullable();
        table.float('tidalVolAdj').nullable();
        table.float('systolicPressureAdj').nullable();
        table.integer('systolicPressureQuality').nullable();
        table.integer('dataLossStatusCode').nullable();
        table.integer('deviceStatus').nullable();
        table.integer('errorCode').nullable();
        table.string('timehash').nullable();
        table.timestamp('derivedTimestamp').nullable();
        table.integer('month').nullable();
        table.integer('year').nullable();
        table.specificType('timestamp1', 'bigint').nullable();
        table.float('avgPPG').nullable();
        table.string('subject').nullable();
        table.string('sessionId').nullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reports');
};
