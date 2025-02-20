import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sequelizeWithDB, sequelizeWithoutDB } from './src/database/index.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateScriptInDataBase() {
  const scriptPathSql = path.join(__dirname, 'init-db.sql');
  const sql = fs.readFileSync(scriptPathSql, 'utf8');

  const commands = sql.split(';').filter((command) => command.trim() !== '');
  for (const command of commands) {
    try {
      await sequelizeWithDB().query(command);
    } catch (err) {
      console.error(`Ошибка выполнения команды: ${command}`, err);
    }
  }
}

async function initDatabase() {
  const adminSequelize = sequelizeWithoutDB();
  try {
    const [checkDbExists] = await adminSequelize.query(
      `SELECT 1 FROM pg_database WHERE datname = '${process.env.DB_NAME}'`
    );

    if (checkDbExists.length === 0) {
      await adminSequelize.query(`CREATE DATABASE ${process.env.DB_NAME}`);

      await generateScriptInDataBase();

      console.log('База данных создана успешно');
    } else {
      console.log('База данных уже существует');
    }
  } catch (error) {
    if (error.parent && error.parent.code === '42P04') {
      console.log('База данных уже существует. Пропускаем создание.');
    } else {
      console.error('Ошибка при создании базы данных:', error);
    }
  } finally {
    await adminSequelize.close();
  }

  console.log('Инициализация базы данных завершена');
}

export default initDatabase;
