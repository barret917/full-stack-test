import express from 'express';
import Courier from '../models/courierModel.js';
import Order from '../models/orderModel.js';
import { sequelizeWithDB } from '../database/index.js';
const sequelize = sequelizeWithDB();
 
export const getAll = async (req, res) => {
  try {
   
    const startRow = Number(req.query.start) || 0;
    const endRow = Number(req.query.end) || 20;
    const limit = endRow - startRow;
    const offset = startRow;

    const couriers = await sequelize.query(
      `SELECT * FROM couriers ORDER BY id ASC LIMIT :limit OFFSET :offset`,
      {
        replacements: { limit, offset },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    const totalCountResult = await sequelize.query(
      'SELECT COUNT(*) AS count FROM couriers',
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    const totalCount =
      couriers.length === 0 ? startRow : totalCountResult[0].count;

    res.json({ couriers, totalCount });
  } catch (err) {
    console.log(err);
    res.status(500).send('Ошибка в courierController');
  }
};

export const postCreateCourier = async (req, res) => {
  try {
    const { name, age, city, nationality, transport, phone, email } = req.body;
    const newCourier = await Courier.create({
      name,
      age,
      city,
      nationality,
      transport,
      phone,
      email,
    });
    res.status(201).json(newCourier);
  } catch (err) {
    console.error('Ошибка при создании курьера:', err);
    res.status(500).send('Не удалось создать курьера');
  }
};

export const updateCourier = async (req, res) => {
  try {
    
    const { name, age, city, nationality, transport, phone, email } = req.body;

    if (!email) {
      return res.status(400).send('Email обязателен для обновления');
    }

    const query = `
      UPDATE couriers SET
        name = COALESCE($1, name),
        age = COALESCE($2, age),
        city = COALESCE($3, city),
        nationality = COALESCE($4, nationality),
        transport = COALESCE($5, transport),
        phone = COALESCE($6, phone)
      WHERE email = $7
      RETURNING *`;

    const values = [
      name?.trim() || null,
      age && !isNaN(age) ? parseInt(age, 10) : null,
      city?.trim() || null,
      nationality?.trim() || null,
      transport?.trim() || null,
      phone?.trim() || null,
      email.trim(),
    ];

    const [result] = await sequelize.query(query, { bind: values });

    if (!result || result.length === 0) {
      return res.status(404).send('Курьер с указанным email не найден');
    }

    return res.status(200).json(result[0]);
  } catch (err) {
    console.error('Ошибка обновления курьера:', err);
    return res.status(500).send(`Ошибка обновления курьера: ${err.message}`);
  }
};

export const deleteCourier = async (req, res) => {
  try {
    const email = req.body.email

    if (!email) {
      return res.status(400).send("Email обязателен")
    }

    const [result] = await sequelize.query(`DELETE FROM couriers WHERE email=:email RETURNING *`, {
      replacements: { email },
      type:sequelize.QueryTypes.DELETE
    })

    if (!result || result.length === 0) {
      return res.status(404).send('Курьер с таким email не найден');
    }
     return res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).send("Не удалось удалить курьера по email")
  }
}


export const transportCounts = async (req, res) => {
  try {
    const response = await Courier.findAll({
      attributes: [
        'transport',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
      ],
      group: ['transport'],
      raw: true,
    });

    
    const transportCounts = response.reduce((acc, { transport, count }) => {
      acc[transport] = count;
      return acc;
    }, {});

    return res.json(transportCounts);
  } catch (error) {
    res
      .status(500)
      .send('Не удалось получить количество курьеров по транспорту');
  }
};
