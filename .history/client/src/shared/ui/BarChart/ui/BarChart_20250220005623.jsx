import React, { useEffect, useState } from 'react';
import {
  BarChart as BarChartUI,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useGetTotalCostByCity } from '@/entities/Orders/hooks'; 

export function BarChart({ height }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await useGetTotalCostByCity();
        console.log(result);
        const dataArray = Object.entries(result).map(([city, cost]) => ({
          name: city,
          cost: Number(cost),
          fill: '#8884d8',
        }));
        setChartData(dataArray);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
    fetchData();
  }, []);

  if (chartData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChartUI
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }}
          interval={0}
        />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cost" fill="#8884d8" />
      </BarChartUI>
    </ResponsiveContainer>
  );
}
