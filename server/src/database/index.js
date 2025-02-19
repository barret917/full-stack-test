import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const commonConfig = {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  commonConfig
);

export const sequelizeWithDB = () => sequelize;
export const sequelizeWithoutDB = () =>
  new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
