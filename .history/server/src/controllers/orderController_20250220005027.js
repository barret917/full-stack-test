import { sequelizeWithDB } from '../database/index.js';
import Order from '../models/orderModel.js';
const sequelize = sequelizeWithDB();

export const getPaginated = async (req, res) => {
  try {
    const startRow = Number(req.query.start) || 0;
    const endRow = Number(req.query.end) || 20;
    const limit = endRow - startRow;
    const offset = startRow;

    const orders = await sequelize.query(
      `SELECT * FROM orders ORDER BY id ASC LIMIT :limit OFFSET :offset`,
      {
        replacements: { limit, offset },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    const totalCountResult = await sequelize.query(
      'SELECT COUNT(*) AS count FROM orders',
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    const totalCount =
      orders.length === 0 ? startRow : totalCountResult[0].count;

    res.json({ orders, totalCount });
  } catch (err) {
    console.log(err);
    res.status(500).send('Ошибка в courierController');
  }
};

export const postOrder = async (req, res) => {
  try {
    const {
      order_name,
      recipient_name,
      recipient_phone,
      recipient_email,
      address_from,
      address_to,
      distance,
      price,
      region,
      city,
      description,
    } = req.body;

    const newOrder = await Order.create({
      order_name,
      recipient_name,
      recipient_phone,
      recipient_email,
      address_from,
      address_to,
      distance,
      price,
      region,
      city,
      description,
    });

    res.status(201).json(newOrder);
  } catch (err) {
    console.log(err);

    res.status(500).send('Ошибка при создании заказа');
  }
};

export const updateOrder = async (req, res) => {
  try {
    
    const {
      order_name,
      recipient_name,
      recipient_phone,
      recipient_email,
      address_from,
      address_to,
      distance,
      price,
      region,
      city,
      description,
    } = req.body;

    if (!recipient_email) {
      return res.status(400).send('Email обязателен для обновления');
    }

    const query = `
      UPDATE orders SET
        order_name = COALESCE($1, order_name),
        recipient_name = COALESCE($2, recipient_name),
        recipient_phone = COALESCE($3, recipient_phone),
        address_from = COALESCE($4, address_from), 
        address_to = COALESCE($5, address_to),
        distance = COALESCE($6, distance),
        price = COALESCE($7, price),
        region = COALESCE($8, region),
        city = COALESCE($9, city),
        description = COALESCE($10, description)
      WHERE recipient_email = $11
      RETURNING *`;

    const values = [
      order_name?.trim() || null,
      recipient_name?.trim() || null,
      recipient_phone?.trim() || null,
      address_from?.trim() || null,
      address_to?.trim() || null,
      distance && !isNaN(distance) ? parseFloat(distance) : null,
      price && !isNaN(price) ? parseFloat(price) : null,
      region?.trim() || null,
      city?.trim() || null,
      description?.trim() || null,
      recipient_email.trim(),
    ];

    const [result] = await sequelize.query(query, { bind: values });

    if (!result || result.length === 0) {
      return res.status(404).send('Заказ с указанным email не найден');
    }

    return res.status(200).json(result[0]);
  } catch (err) {
    console.error('Ошибка обновления заказа:', err);
    return res.status(500).json({
      message: 'Ошибка при обновлении заказа',
      error: err.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const email = req.body.email;

    if (!email) {
      return res.status(400).send("Email обязателен");
    }

    const [result] = await sequelize.query(
      `DELETE FROM orders WHERE recipient_email=:email RETURNING *`,
      {
        replacements: { email },
        type: sequelize.QueryTypes.DELETE,
      }
    );

    if (!result || result.length === 0) {
      return res.status(404).send("Заказ с таким email не найден");
    }

    return res.json({ message: "Заказ удалён" });
  } catch (err) {
    
    console.error('Ошибка при удалении заказа:', err);
    res.status(500).json({ message: 'Ошибка при удалении заказа', error: err.message });
  }
};


