'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    testId: DataTypes.INTEGER,
    url: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Test, {foreignKey: 'testId'})
  };
  return Image;
};
