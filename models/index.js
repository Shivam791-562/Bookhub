const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./user')(sequelize, Sequelize);
db.Author = require('./author')(sequelize, Sequelize);
db.Book = require('./book')(sequelize, Sequelize);

// Associations
db.Author.hasMany(db.Book);
db.Book.belongsTo(db.Author);

module.exports = db;