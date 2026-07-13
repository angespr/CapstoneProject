import UrgencyTag from "./UrgencyTag";
import "../css/StatCard.css";

export default function StatCard({ label, value, suffix, note, flag }) {
  return (
    <div className={`stat-card ${flag ? "stat-card--flagged" : ""}`}>
      {flag && <UrgencyTag tone="primary">Notable</UrgencyTag>}
      <p className="stat-card__value">
        {value}
        <span className="stat-card__suffix">{suffix}</span>
      </p>
      <p className="stat-card__label">{label}</p>
      <p className="stat-card__note">{note}</p>
    </div>
  );
}
