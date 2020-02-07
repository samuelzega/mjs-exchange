'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Favorite extends Model { }

  Favorite.init({
    stock_code: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Stock Code Required!'
        }
      }
    },
    stock_name: DataTypes.STRING,
    stock_industry: DataTypes.STRING,
    stock_ceo: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, { sequelize })

  Favorite.associate = function (models) {
    Favorite.belongsTo(models.User)
  };
  return Favorite;
};