import Reveal from "./Reveal";
import { useState, useEffect } from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

import { methodologyData } from "../data/methodology";
import "../css/MethodologyCharts.css";

const COLORS = [
  "var(--color-primary)",
  "var(--color-periwinkle-strong)",
  "var(--color-mint-strong)",
  "var(--color-periwinkle-dark)",
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 700);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return isMobile;
}

function wrapText(text, maxChars = 6) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine
      ? `${currentLine} ${word}`
      : word;

    if (testLine.length <= maxChars) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) lines.push(currentLine);

  return lines;
}

function renderLabel({ cx, cy, midAngle, outerRadius, name }) {
  const RADIAN = Math.PI / 180;

  const radius = outerRadius + 15;

const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

// Distance away from the connector line from graph to label
const labelOffset = 12;
const labelX = x > cx ? x + labelOffset : x - labelOffset;

  const lines = wrapText(name);

  return (
    <text
      x={labelX}
      y={y}
      fill="var(--color-ink)"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="middle"
      fontSize={12}
    >
      {lines.map((line, index) => (
        <tspan
          key={index}
          x={labelX}
          dy={index === 0 ? 0 : "1.15em"}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="chart_tooltip">
        <p>{payload[0].name}</p>
        <strong>{payload[0].value}%</strong>
      </div>
    );
  }

  return null;
}

export default function MethodologyCharts() {
    const isMobile = useIsMobile();

  return (
    <div className="methodology_charts">

      {/* Gender Pie Chart */}
      <Reveal className="chart-card">
        <h3>Gender Distribution</h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
                data={methodologyData.gender}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={renderLabel}
                >
              {methodologyData.gender.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </Reveal>

      {/* Age Horizontal Bar Chart */}
      <Reveal className="chart-card">
        <h3>Age Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={methodologyData.age}
            layout="vertical"
            margin={{
              left: 20,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis
              type="number"
            />
            <YAxis
              dataKey="name"
              type="category"
              width={60}
            />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="var(--color-primary)"
              radius={[0, 6, 6, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Reveal>

      {/* Education Donut Chart */}
      <Reveal className="chart-card">
        <h3>Educational Background</h3>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart
            margin={{
                top: 20,
                right: 60,
                bottom: 20,
                left: 60,
            }}
            >
            <Pie
                data={methodologyData.education}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={3}
                label={renderLabel}
                >
              {methodologyData.education.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </Reveal>
    </div>
  );
}