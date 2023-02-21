const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Attraction, User, Love }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Attraction, { foreignKey: 'attraction1id' });
      this.hasMany(Attraction, { foreignKey: 'attraction2id' });
      this.hasMany(Attraction, { foreignKey: 'attraction3id' });
      this.hasMany(Love, { foreignKey: 'loveId' });
    }
  }
  Date.init(
    {
      attraction1id: DataTypes.INTEGER,
      attraction2id: DataTypes.INTEGER,
      attraction3id: DataTypes.INTEGER,
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
