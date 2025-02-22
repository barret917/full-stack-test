import { DataTypes } from 'sequelize';
import { sequelizeWithDB } from '../database/index.js';

const Courier = sequelizeWithDB().define(
  'courier',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
export default Courier;
