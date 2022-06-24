'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    testId: DataTypes.INTEGER,
    url: DataTypes.INTEGER
  }, {});
  images.associate = function(models) {
    // associations can be defined here
  };
  return images;
};