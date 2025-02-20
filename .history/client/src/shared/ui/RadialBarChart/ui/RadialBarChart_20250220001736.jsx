import React, { useEffect, useState } from 'react';
import {
  RadialBarChart as RadialBarChartUI,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useGetCountTransport } from '@entities/Couriers/hooks';

// Маппинг цветов для каждого типа транспорта
const defaultColors = {
  Самокат: '#9eb8e6',
  Автомобиль: '#e0c6ff',
  Велосипед: '#6c8eb6',
  'Общественный транспорт': '#85a3ce',
  Пешком: '#b8ceff',
};

export function RadialBarChart({ height }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Получаем объект с подсчитанными значениями
        const counts = await useGetCountTransport();
        // Преобразуем объект в массив нужной структуры
        const dataArray = Object.keys(counts).map((key) => ({
          name: key,
          uv: Number(counts[key]), // преобразуем строку в число
          fill: defaultColors[key] || '#000', // задаём цвет, либо черный по умолчанию
        }));
        setChartData(dataArray);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }
    fetchData();
  }, []);

  // Если данные ещё не загружены, можно вывести спиннер или сообщение "Loading..."
  if (chartData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadialBarChartUI
        innerRadius="10%"
        outerRadius="100%"
        data={chartData}
        startAngle={180}
        endAngle={0}
        barSize={20}
      >
        <RadialBar
          label={{ fill: '#003f5c', position: 'insideStart' }}
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="top"
          align="left"
        />
        <Tooltip />
      </RadialBarChartUI>
    </ResponsiveContainer>
  );
}
