const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Type, Date }) {
      this.belongsTo(Type, { foreignKey: 'typeId' });
      this.belongsTo(Date, { foreignKey: 'attraction1id' });
      this.belongsTo(Date, { foreignKey: 'attraction2id' });
      this.belongsTo(Date, { foreignKey: 'attraction3id' });
    }
  }
  Attraction.init(
    {
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
