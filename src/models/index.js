'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const santasModel = require('./santaslist/model.js');
const reindeerModel = require('./reindeer/model.js');
const Collection = require('./data-collection.js');
const userModel = require('../auth/models/users');

const DATABASE_URL = process.env.DATABASE_URL;


const sequelize = new Sequelize(DATABASE_URL);
const list = santasModel(sequelize, DataTypes);
const reindeer = reindeerModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  list: new Collection(list),
  reindeer: new Collection(reindeer),
};
