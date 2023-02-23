'use strict';

const santasModel = (sequelize, DataTypes) => sequelize.define('List', {
  name: { type: DataTypes.STRING, required: true },
  naughtyOrNice: { type: DataTypes.ENUM('naughty', 'nice'), required: true },
  wish: { type: DataTypes.STRING, required: true },
  present: { type: DataTypes.ENUM('wish', 'coal'), required: true },
});

module.exports = santasModel;
