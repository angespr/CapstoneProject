import Reveal from "./Reveal";
import UrgencyTag from "./UrgencyTag";
import TypewriterText from "./TypewriterText";
import "../css/Showcase.css";

export default function Showcase({ credits }) {
  return (
    <section className="showcase" id="poster">
      <div className="showcase__grid">
        <Reveal className="showcase__col showcase__col--left">
          <figure className="poster-frame">
            <img
              src="public/images/poster.svg"
              alt="Capstone research poster: Urgency Meets Obedience"
              className="poster-frame__img"
            />
          </figure>

          <div className="credits-card">
            <UrgencyTag tone="ink">Credits</UrgencyTag>
            <dl className="credits-card__list">
              {credits.map((c) => (
                <div className="credits-card__row" key={c.role}>
                  <dt>{c.role}</dt>
                  <dd>{c.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Right column: paper coming soon */}
        <Reveal delay={120} className="showcase__col showcase__col--right">
          <div className="paper-panel">
            <img
              src="public/images/paper-placeholder.svg"
              alt="Preview of the forthcoming published paper"
              className="paper-panel__img"
            />
            <div className="paper-panel__overlay">
              <UrgencyTag tone="paper">Publication status</UrgencyTag>
              <p className="paper-panel__headline">
                Coming Soon<TypewriterText text="..." />
              </p>
              <p className="paper-panel__sub">
                The full paper is currently being constructed. Check back for the
                DOI and open-access link when it's ready! :)
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
