'use strict';

const reindeerModel = (sequelize, DataTypes) => sequelize.define('Reindeer', {
  name: { type: DataTypes.STRING, required: true },
  position: { type: DataTypes.INTEGER, required: true },
  games: { type: DataTypes.ENUM('yes', 'no'), required: true },
});

module.exports = reindeerModel;
