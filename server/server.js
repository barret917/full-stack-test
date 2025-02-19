import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import courierRouter from './src/routes/courierRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import initDatabase from './initDatabase.js';
import { sequelizeWithDB } from './src/database/index.js';
import './src/models/associations.js';
dotenv.config();

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/couriers', courierRouter);

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await initDatabase();
    const sequelize = sequelizeWithDB();

    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Ошибка при запуске:', error);
  }
}

startServer();
