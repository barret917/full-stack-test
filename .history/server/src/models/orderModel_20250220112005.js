import { DataTypes } from 'sequelize';
import Courier from './courierModel.js';
import { sequelizeWithDB } from '../database/index.js';

const Order = sequelizeWithDB().define(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_name: {
      type: DataTypes.STRING,
    },
    recipient_name: {
      type: DataTypes.STRING,
    },
    recipient_phone: {
      type: DataTypes.STRING,
    },
    recipient_email: {
      type: DataTypes.STRING,
    },
    address_from: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    address_to: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    distance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    courier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Courier,
        key: 'id',
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    underscored: true,
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);


export default Order;
