'use strict';
const express = require('express');
const reportApi = express.Router();

module.exports = (knex) => {

  reportApi.get('/all', (req, res) => {
    knex('reports')
      .then((reports) => {
        return res.status(200).send({
          reports
        });
      });
  });

  reportApi.get('/:id', (req, res) => {
    let report_id = req.params.id;

    if (!report_id) {
      return res.status(400).send({
        message: 'Missing report ID'
      });
    };

    knex('reports')
      .where('reports.id', report_id)
      .then((reports) => {
        return res.status(200).send({
          reports
        });
      });
  });

  reportApi.post('/new', (req, res) => {
    let formData = req.body;
     for (const key of Object.keys(formData)) {
       let key = formData[key];
    }

    knex('reports')
        .returning('id')
        .insert({
          timestamp,
          heartRate,
          heartRateQuality,
          coreTemp,
          activityIntensity,
          actigraphy,
          breathingRate,
          cadence,
          minute_ventilation_adj,
          tidalVolAdj,
          systolicPressureAdj,
          systolicPressureQuality,
          dataLossStatusCode,
          deviceStatus,
          errorCode,
          timehash,
          derivedTimestamp,
          month,
          year,
          timestamp1,
          avgPPG,
          subject,
          sessionId
        })
        .then((report_id) => {
            return res.status(200).send({
                report_id,
                message: 'Successfully added new report',
            });
        })
        .catch((e) => {
          console.log(JSON.stringify(e))
            return res.status(500).send({
                message: e
              });
        });
  });

  return reportApi;

}