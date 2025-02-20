import {
  BarChart as BarChartUI,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: 'Page A',
    uv: 200,
    pv: 2400,
    fill: '#9eb8e6',
    localName: 'узбеки',
  },
  {
    name: 'Page A',
    uv: 300,
    pv: 2400,
    fill: '#e0c6ff',
    localName: 'таджики',
  },
  {
    name: 'Page A',
    uv: 280,
    pv: 2400,
    fill: '#6c8eb6',
    localName: 'гиганты',
  },
  {
    name: 'Page A',
    uv: 340,
    pv: 2400,
    fill: '#85a3ce',
    localName: 'кыргызы',
  },
  {
    name: 'Page A',
    uv: 400,
    pv: 2400,
    fill: '#b8ceff',
    localName: 'бички',
  },
];

export function BarChart({ height }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChartUI data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChartUI>
    </ResponsiveContainer>
  );
}
