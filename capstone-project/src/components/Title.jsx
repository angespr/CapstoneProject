import UrgencyTag from "./UrgencyTag";
import "../css/Title.css";

export default function Title() {
  return (
    <header className="title">
      <div className="title__inner">
        <UrgencyTag tone="ink">Undergraduate Capstone · Cybersecurity Research </UrgencyTag>
        <h1 className="title__title">
          Urgency Meets <em>Obedience</em>
        </h1>
        <p className="title__subtitle">
          How identity and social expectations influence women's responses
          to cybersecurity urgency cues.
        </p>
        <div className="title__meta">
          <span>Presented and researched by Angelina Sprague and Rane Peterson of UW Bothell</span>
        </div>
      </div>
      <div className="title__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </header>
  );
}
