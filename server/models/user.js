'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model {}

  User.init(
    {
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Please input valid email'
          }, 
          isEmail: {
            msg: 'Please input valid email'
          }
        }
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Please input name'
          }
        }
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Please input password'
          },
          notNull: {
            msg: 'Please input password'
          }
        }
      }
    },
    {
      sequelize
    }
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
