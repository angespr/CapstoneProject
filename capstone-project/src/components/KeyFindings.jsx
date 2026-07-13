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
      <p className="chart-tooltip__label">
        {payload[0].payload.tooltip}
      </p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="chart-tooltip__row">
          <span
            className="chart-tooltip__swatch"
            style={{ background: entry.color }}
          />
          {entry.name} Mean = {entry.value.toFixed(2)}
        </p>
      ))}
    </div>
  );
}

function CustomXAxisTick({ x, y, payload }) {
  const words = payload.value.split(" ");
  const lines = [];
  let current = "";

  const maxChars = 18; 

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
        fontSize={12}
      >
        {lines.map((line, index) => (
          <tspan
            key={index}
            x={0}
            dy={index === 0 ? 16 : 14}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export default function KeyFindings() {
  return (
    <section className="findings" id="findings">
      <div className="findings__inner">
        <Reveal className="findings__heading">
          <UrgencyTag tone="primary">Findings</UrgencyTag>
          <h2>What the data showed</h2>
          <p className="findings__intro">
            Figures below are pulled directly from the study dataset.
          </p>
        </Reveal>

        {/* Data Stat Cards */}
        <div className="findings__stats">
          {datapoints.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <StatCard {...s} />
            </Reveal>
          ))}
        </div>

        {/* Grouped bar chart */}
        <Reveal className="chart-card">
          <div className="chart-card__head">
            <h3>Cybersecurity PERCEPTIONS by Gender</h3>
            <p>The data is presented as the average agreement level of participants with each statement regarding their gender identity and online safety concerns.</p>
          </div>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={genderPerceptionData} margin={{ top: 10, right: 25, left: -25, bottom: 50 }}>
              <CartesianGrid stroke="var(--color-line)" vertical={false} />
              <XAxis
                dataKey="condition"
                tick={<CustomXAxisTick />}
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
          <div className="chart-card__head">
            <h3>Cybersecurity CONFIDENCE by Gender</h3>
            <p>The data is presented as the average agreement level of participants with each statement regarding their gender identity and online safety practices.</p>
          </div>
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={genderConfidenceData} margin={{ top: 10, right: 25, left: -25, bottom: 80 }}>
              <CartesianGrid stroke="var(--color-line)" vertical={false} />
              <XAxis
                dataKey="cue"
                tick={<CustomXAxisTick />}
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
        <div className="findings__quotes">
          {pullQuotes.map((q, i) => (
            <Reveal key={q.source} delay={i * 100} className="quote-card">
              <p className="quote-card__text">&ldquo;{q.quote}&rdquo;</p>
              <p className="quote-card__source">{q.source}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
