const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Love, AttractionDate }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Love, { foreignKey: 'loveId' });
      this.hasMany(AttractionDate, { foreignKey: 'dateId' });
    }
  }
  Date.init(
    {
      time: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      loveId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Date',
    },
  );
  return Date;
};
