'use strict'

const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class User extends Model {}

  User.init(
    {
      email: {
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
      sequelize,
      hooks: {
        beforeCreate: (user, option) => {
          let hash = bcrypt.hashSync(user.password, 10);
          user.password = hash
        }
      }
    }
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
