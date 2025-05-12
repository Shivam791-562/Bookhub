module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Book', {
      title: DataTypes.STRING,
    });
  };