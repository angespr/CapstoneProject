import "../css/UrgencyTag.css";

export default function UrgencyTag({ children, tone = "primary" }) {
  return (
    <span className={`urgency-tag urgency-tag--${tone}`}>
      <span className="urgency-tag__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
