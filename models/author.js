module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Author', {
      name: DataTypes.STRING,
    });
  };