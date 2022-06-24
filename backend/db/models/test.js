'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    details: DataTypes.STRING,
    pay: DataTypes.INTEGER
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};