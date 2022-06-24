'use strict';
module.exports = (sequelize, DataTypes) => {
  const enlist = sequelize.define('enlist', {
    testId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.STRING
  }, {});
  enlist.associate = function(models) {
    // associations can be defined here
  };
  return enlist;
};