import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import UrgencyTag from "./UrgencyTag";
import StatCard from "./StatCard";
import "../css/KeyFindings.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

import {
  datapoints,
  genderPerceptionData,
  genderConfidenceData,
  pullQuotes,
} from "../data/findings";

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip_label">
        {payload[0].payload.tooltip}
      </p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="chart-tooltip_row">
          <span
            className="chart-tooltip_swatch"
            style={{ background: entry.color }}
          />
          {entry.name} = {entry.value.toFixed(2)}
        </p>
      ))}
    </div>
  );
}

function CustomXAxisTick({ x, y, payload, fontSize }) {
  const words = payload.value.split(" ");
  const lines = [];
  let current = "";

  // Smaller labels on mobile need fewer chars per line
  const maxChars = fontSize <= 8 ? 12 : 18;

  words.forEach((word) => {
    if ((current + " " + word).trim().length <= maxChars) {
      current += (current ? " " : "") + word;
    } else {
      lines.push(current);
      current = word;
    }
  });

  if (current) lines.push(current);

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        textAnchor="middle"
        fill="var(--color-ink-soft)"
        fontSize={fontSize}
      >
        {lines.map((line, index) => (
          <tspan
            key={index}
            x="0"
            dy={index === 0 ? 7 : 14}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export default function KeyFindings() {

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className="findings" id="findings">
      <div className="findings_inner">
        <Reveal className="findings_heading">
          <UrgencyTag tone="primary">Findings</UrgencyTag>
          <h2>What the data showed</h2>
          <p className="findings_intro">
            Figures below are pulled directly from the study dataset.
          </p>
        </Reveal>

        {/* Data Stat Cards */}
        <div className="findings_stats">
          {datapoints.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <StatCard {...s} />
            </Reveal>
          ))}
        </div>

        {/* Grouped bar chart */}
        <Reveal className="chart-card">
          <div className="chart-card_head">
            <h3>Cybersecurity PERCEPTIONS by Gender</h3>
            <p>The data is presented as the average agreement level of participants with each statement regarding their gender identity and online safety concerns.</p>
          </div>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={genderPerceptionData} margin={{ 
              top: 10, 
              right: 25, 
              left: -25, 
              bottom: isMobile ? 25 : 90
            }}>
              <CartesianGrid stroke="var(--color-line)" vertical={false} />
              <XAxis
                dataKey={isMobile ? "tooltip" : "condition"}
                tick={<CustomXAxisTick fontSize={isMobile ? 7 : 12} />}
                tickLine={false}
                axisLine={{ stroke: "var(--color-line)" }}
                interval={0}
              />
              <YAxis
                domain={[1, 5]}
                tickCount={5}
                tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(62,26,41,0.05)" }} />
              <Legend
                verticalAlign="top"
                height={36}
                wrapperStyle={{
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-ink-soft)",
                }}
              />
              
                <Bar
                  dataKey="women"
                  name="Women"
                  fill="var(--color-primary)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={46}
                />
                
                <Bar
                  dataKey="men"
                  name="Men"
                  fill="var(--color-periwinkle)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={46}
                />

            </BarChart>
          </ResponsiveContainer>
        </Reveal>

        {/* Grouped bar chart */}
        <Reveal className="chart-card">
          <div className="chart-card_head">
            <h3>Cybersecurity CONFIDENCE by Gender</h3>
            <p>The data is presented as the average agreement level of participants with each statement regarding their gender identity and online safety practices.</p>
          </div>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={genderConfidenceData} margin={{ 
              top: 10, 
              right: 25, 
              left: -25, 
              bottom: isMobile ? 45 : 80
            }}>
              <CartesianGrid stroke="var(--color-line)" vertical={false} />
              <XAxis
                dataKey={isMobile ? "tooltip" : "cue"}
                tick={<CustomXAxisTick fontSize={isMobile ? 7 : 12} />}
                tickLine={false}
                axisLine={{ stroke: "var(--color-line)" }}
                interval={0}
              />
              <YAxis
                domain={[1, 5]}
                tickCount={5}
                tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(62,26,41,0.05)" }} />
              <Legend
                verticalAlign="top"
                height={36}
                wrapperStyle={{
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-ink-soft)",
                }}
              />
              
                <Bar
                  dataKey="women"
                  name="Women"
                  fill="var(--color-primary)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={46}
                />
                
                <Bar
                  dataKey="men"
                  name="Men"
                  fill="var(--color-periwinkle)"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={46}
                />

            </BarChart>
          </ResponsiveContainer>
        </Reveal>

        {/* Pull quotes */}
        <div className="findings_quotes">
          {pullQuotes.map((q, i) => (
            <Reveal key={q.source} delay={i * 100} className="quote-card">
              <p className="quote-card_text">&ldquo;{q.quote}&rdquo;</p>
              <p className="quote-card_source">{q.source}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
