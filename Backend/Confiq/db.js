const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  process.env.DB_NAME || 'zamato',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
    dialectOptions: {
      decimalNumbers: true,
      // SSL for Aiven/cloud databases (optional)
      ...(process.env.DB_SSL === 'true' && {
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    },
  }
);

module.exports = db;