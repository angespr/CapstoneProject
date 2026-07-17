import { useState } from "react";

import Reveal from "./Reveal";
import UrgencyTag from "./UrgencyTag";
import TypewriterText from "./TypewriterText";
import "../css/Showcase.css";
import posterImage from "../images/poster.png";

export default function Showcase({ credits }) {
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  return (
    <section className="showcase" id="poster">
      <div className="showcase_grid">
        <Reveal className="showcase_col showcase_col--left">
          <figure className="poster-frame">
            <img
            src={posterImage}
            alt="Capstone research poster: Urgency Meets Obedience"
            className="poster-frame_img"
            onClick={() => setIsPosterOpen(true)}
          />
          </figure>

          <div className="credits-card">
            <UrgencyTag tone="ink">Credits</UrgencyTag>
            <dl className="credits-card_list">
              {credits.map((c) => (
                <div className="credits-card_row" key={c.role}>
                  <dt>{c.role}</dt>
                  <dd>{c.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Right column: paper coming soon */}
        <Reveal delay={120} className="showcase_col showcase_col--right">
          <div className="paper-panel">
            <img
              src="public/images/paper-placeholder.svg"
              alt="Preview of the forthcoming published paper"
              className="paper-panel_img"
            />
            <div className="paper-panel_overlay">
              <UrgencyTag tone="paper">Publication status</UrgencyTag>
              <p className="paper-panel_headline">
                Coming Soon<TypewriterText text="..." />
              </p>
              <p className="paper-panel_sub">
                The full paper is currently being constructed. Check back for the
                DOI and open-access link when it's ready! :)
              </p>
            </div>
          </div>
        </Reveal>
      </div>
        {isPosterOpen && (
        <div className="poster-lightbox" onClick={() => setIsPosterOpen(false)}>
          <img
            src={posterImage}
            alt="Expanded capstone research poster"
            className="poster-lightbox_img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="poster-lightbox_close"
            onClick={() => setIsPosterOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
