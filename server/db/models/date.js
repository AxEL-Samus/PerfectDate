'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Date.init({
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    loveId: DataTypes.INTEGER,
    restLat: DataTypes.STRING,
    restLng: DataTypes.STRING,
    restTitle: DataTypes.STRING,
    kinoLat: DataTypes.STRING,
    kinoLng: DataTypes.STRING,
    kinoTitle: DataTypes.STRING,
    parkLat: DataTypes.STRING,
    parkLng: DataTypes.STRING,
    parkTitle: DataTypes.STRING,
    taxi: DataTypes.STRING,
    kinoDate: DataTypes.STRING,
    movieTitle: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Date',
  });
  return Date;
};