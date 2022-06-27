'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enlist = sequelize.define('Enlist', {
    testId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.STRING
  }, {});
  Enlist.associate = function(models) {
    Enlist.belongsTo(models.Test, {foreignKey: 'testId'})
    Enlist.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Enlist;
};
