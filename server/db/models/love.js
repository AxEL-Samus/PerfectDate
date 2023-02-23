const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Love extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
 
    }
  }
  Love.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      pref: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Love',
    },
  );
  return Love;
};
