import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>"Urgency Meets Obedience" - Undergraduate Capstone Research, {new Date().getFullYear()}</p>
      <p className="site-footer_note">Paper link will be added here once published. Thank you for your interest & patience!</p>
    </footer>
  );
}
