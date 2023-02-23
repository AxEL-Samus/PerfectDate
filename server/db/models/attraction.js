const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Date, Type, AttractionDate }) {
      this.belongsTo(Type, { foreignKey: 'typeId' });
      this.hasMany(AttractionDate, { foreignKey: 'attractionId' });
      this.belongsToMany(Date, { through: AttractionDate, foreignKey: 'attractionId' });
    }
  }
  Attraction.init(
    {
      name: DataTypes.STRING,
      lat: DataTypes.STRING,
      lng: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      url: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Attraction',
    },
  );
  return Attraction;
};
