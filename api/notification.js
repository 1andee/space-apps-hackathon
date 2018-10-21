'use strict';
const express = require('express');
const notificationApi = express.Router();

module.exports = (knex) => {

  notificationApi.get('/all', (req, res) => {
    knex('notifications')
      .orderBy('id', 'desc')
      .then((notifications) => {
        return res.status(200).send({
          notifications
        });
      });
  });

  notificationApi.get('/:id', (req, res) => {
    let notification_id = req.params.id;

    if (!notification_id) {
      return res.status(400).send({
        message: 'Missing notification ID'
      });
    };

    knex('notifications')
      .where('notifications.id', notification_id)
      .then((notifications) => {
        return res.status(200).send({
          notifications
        });
      });
  });

  notificationApi.post('/new', (req, res) => {
    let { message } = req.body;

    knex('notifications')
        .returning('id')
        .insert({
          message
        })
        .then((notification_id) => {
            return res.status(200).send({
                notification_id,
                message: 'New notification saved.',
            });
        })
        .catch((e) => {
          console.log(JSON.stringify(e))
            return res.status(500).send({
                message: e
              });
        });
  });

  return notificationApi;

}