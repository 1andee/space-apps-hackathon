let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
const expect = require('chai').expect;
let should = chai.should();

const knexConfig  = require('../knexfile');
const knex = require('knex')(knexConfig['test']);

chai.use(chaiHttp);

describe('API Routes', () => {

  beforeEach(() => knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run())
  );

  afterEach(() => knex.migrate.rollback());

  describe('GET /api/report/all', () => {
    it('it should fetch all reports', (done) => {
      chai.request(server)
          .get('/api/report/all')
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.reports.should.be.a('array');
                res.body.reports[0].should.have.property('timestamp');
                res.body.reports[0].should.have.property('heartRate');
                res.body.reports[0].should.have.property('heartRateQuality');
                res.body.reports[0].should.have.property('coreTemp');
                res.body.reports[0].should.have.property('activityIntensity');
                res.body.reports[0].should.have.property('breathingRate');
                res.body.reports[0].should.have.property('systolicPressureAdj');
                res.body.reports[0].should.have.property('systolicPressureQuality');
                res.body.reports[0].should.have.property('timehash');
                res.body.reports[0].should.have.property('derivedTimestamp');
                res.body.reports[0].should.have.property('month');
                res.body.reports[0].should.have.property('year');
                res.body.reports[0].should.have.property('timestamp1');
                res.body.reports[0].should.have.property('avgPPG');
                res.body.reports[0].should.have.property('subject');
                res.body.reports[0].should.have.property('sessionId');
            done();
          });
    });
  });

  describe('GET /api/notification/all', () => {
    it('it should fetch all notifications', (done) => {
      chai.request(server)
          .get('/api/notification/all')
          .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.notifications.should.be.a('array');
                res.body.notifications[0].should.have.property('id');
                res.body.notifications[0].should.have.property('message');
                res.body.notifications[0].should.have.property('read');
                res.body.notifications[0].should.have.property('timestamp');
            done();
          });
    });
  });
})