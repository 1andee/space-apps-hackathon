exports.seed = function(knex, Promise) {
    return knex('reports').del()
      .then(function () {
        return knex('reports').insert([
        {
          timestamp: 1539083005000,
          heartRate: 70,
          heartRateQuality: 16,
          coreTemp: 20.78515625,
          activityIntensity: 0.09765625,
          actigraphy: 1.0078125,
          breathingRate: 15,
          cadence: 0,
          minute_ventilation_adj: 0,
          tidalVolAdj: 0,
          systolicPressureAdj: 260,
          systolicPressureQuality: 7,
          dataLossStatusCode: 0,
          deviceStatus: 3,
          errorCode: 0,
          timehash: '93325',
          derivedTimestamp: '2018-10-09T11:03:25.000Z',
          month: 10,
          year: 2018,
          timestamp1: 1539083005000,
          avgPPG: 32920.5,
          subject: 'A',
          sessionId: 'Day_5_7h03_dur_8h'
        }
        ]);
      });
  };