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
  "var(--color-mint-strong)",
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
    const testLine = currentLine ? `${currentLine} ${word}` : word;

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

function renderLabel({ cx, cy, midAngle, outerRadius, name, isMobile }) {
  const RADIAN = Math.PI / 180;

  const radius = outerRadius + 17;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const labelOffset = isMobile ? 11 : 15;

  // Default positioning
  let labelX = x > cx ? x + labelOffset : x - labelOffset;
  let labelY = y;
  let anchor = x > cx ? "start" : "end";

  // Manual adjustments
  if (name === "Associate Degree") {
    labelX = x - 6; 
    labelY = y + 9;
    anchor = "end";
  }

  if (name === "Bachelor's Degree") {
    labelX = x - 8; 
    labelY = y - 10;
    anchor = "end";
  }

  if (name === "Some College") {
    labelX = x + 35; 
    labelY = y + 15;
    anchor = "end";
  }

  if (name === "Law Degree or Professional Degree") {
    labelX = x + 50; 
    labelY = y - 18;
    anchor = "end";
  }

  if (name === "GED or Equivalent") {
    labelX = x + 25; 
    labelY = y + 15;
    anchor = "end";
  }

  const lines = wrapText(name, isMobile ? 10 : 6);

  return (
    <text
      x={labelX}
      y={labelY}
      fill="var(--color-ink)"
      textAnchor={anchor}
      dominantBaseline="middle"
      fontSize={isMobile ? 10 : 12}
    >
      {lines.map((line, index) => (
        <tspan
          key={index}
          x={labelX}
          dy={index === 0 ? 0 : "1.3em"}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

function renderEducationLabel(props) {
  const { value, isMobile } = props;
  // Hide labels for very small categories
  if (value < 2) {
    return null;
  }

  if (isMobile && value < 15) {
    return null;
  }

  return renderLabel({
    ...props,
    isMobile,
  });
}

// Percentage Tool tip (gender)
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

// Number tooltip (age and education)
function CountTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="chart_tooltip">
        <p>{payload[0].name}</p>
        <strong>{payload[0].value}</strong>
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
      <Reveal className="methodology_chart-card">
        <h3>Gender Distribution</h3>
        <ResponsiveContainer width={"100%"} height={280}>
          <PieChart
            margin={{
              top: 20,
              right: 30,
              bottom: 50,
              left: 30,
            }}
          >
            <Pie
              data={methodologyData.gender}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label={(props) =>
                renderLabel({
                  ...props,
                  isMobile,
                })
              }
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
      <Reveal className="methodology_chart-card">
        <h3>Age Distribution</h3>
        <ResponsiveContainer width={"100%"} height={250}>
          <BarChart
            data={methodologyData.age}
            layout="vertical"
            margin={{
              top: 20,
              left: 5,
              right: 5,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={60} />
            <Tooltip />
            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
              {methodologyData.age.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Reveal>

      {/* Education Donut Chart */}
      <Reveal className="methodology_chart-card">
        <h3>Educational Background</h3>
        <ResponsiveContainer width={"100%"} height={320}>
          <PieChart
            margin={{
              top: 20,
              right: 60,
              bottom: 50,
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
              label={(props) =>
                renderEducationLabel({
                  ...props,
                  isMobile,
                })
              }
            >
              {methodologyData.education.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CountTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </Reveal>
    </div>
  );
}
