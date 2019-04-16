const knex = require('knex');
const db = require('../knexfile');

const dbConfig = knex(db.development);

module.exports = dbConfig;