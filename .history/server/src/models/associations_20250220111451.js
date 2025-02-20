import Courier from './courierModel.js';
import Order from './orderModel.js';


Courier.hasMany(Order, { foreignKey: 'courier_id', onDelete: 'CASCADE' });
Order.belongsTo(Courier, { foreignKey: 'courier_id' });
