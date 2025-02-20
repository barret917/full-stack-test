import {
  RadialBarChart as RadialBarChartUI,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Page A", uv: 200, pv: 2400, fill: "#9eb8e6", name: "узбеки" },
  { name: "Page A", uv: 300, pv: 2400, fill: "#e0c6ff", name: "таджики" },
  { name: "Page A", uv: 280, pv: 2400, fill: "#6c8eb6", name: "гиганты" },
  { name: "Page A", uv: 340, pv: 2400, fill: "#85a3ce", name: "кыргызы" },
  { name: "Page A", uv: 400, pv: 2400, fill: "#b8ceff", name: "бички" },
];

export function RadialBarChart({ height }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadialBarChartUI
        innerRadius="10%"
        outerRadius="100%"
        data={data}
        startAngle={180}
        endAngle={0}
        barSize={20}
      >
        <RadialBar
          label={{ fill: "#003f5c", position: "insideStart" }}
          background="red"
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
