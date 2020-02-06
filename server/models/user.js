'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model { }

  User.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize
    }
  )
  User.associate = function (models) {
    User.hasMany(models.Favorite)
  }
  return User
}
