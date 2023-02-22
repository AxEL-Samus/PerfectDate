const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AttractionDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Date, Attraction }) {
      this.belongsTo(Date, { foreignKey: 'dateId' });
      this.belongsTo(Attraction, { foreignKey: 'attractionId' });
    }
  }
  AttractionDate.init(
    {
      attractionId: DataTypes.INTEGER,
      dateId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'AttractionDate',
    },
  );
  return AttractionDate;
};
