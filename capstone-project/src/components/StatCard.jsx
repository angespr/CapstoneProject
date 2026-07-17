import UrgencyTag from "./UrgencyTag";
import "../css/StatCard.css";

export default function StatCard({ label, value, suffix, note, flag }) {
  return (
    <div className={`stat-card ${flag ? "stat-card--flagged" : ""}`}>
      {flag && <UrgencyTag tone="primary">Notable</UrgencyTag>}
      <p className="stat-card_value">
        {value}
        <span className="stat-card_suffix">{suffix}</span>
      </p>
      <p className="stat-card_label">{label}</p>
      <p className="stat-card_note">{note}</p>
    </div>
  );
}
