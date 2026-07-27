import Reveal from "./Reveal";
import UrgencyTag from "./UrgencyTag";
import { about } from "../data/about";
import "../css/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about_inner">
        <Reveal className="about_copy">
        <UrgencyTag tone="primary">{about.eyebrow}</UrgencyTag>
        <h2 className="about_heading">{about.heading}</h2>

    <div className="about_content">
        <div className="about_column">
            {about.left.map((item, i) => (
            <div className="about_section" key={i}>
                {item.heading && (
                <h3 className="about_subheading">{item.heading}</h3>
                )}

                {item.paragraph && (
                <p className="about_paragraph">{item.paragraph}</p>
                )}

                {item.list && (
                <ul className="about_list">
                    {item.list.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                    ))}
                </ul>
                )}
            </div>
            ))}
        </div>

        <div className="about_column">
            {about.right.map((item, i) => (
            <div className="about_section" key={i}>
                {item.heading && (
                <h3 className="about_subheading">{item.heading}</h3>
                )}

                {item.paragraph && (
                <p className="about_paragraph">{item.paragraph}</p>
                )}

                {item.list && (
                <ul className="about_list">
                    {item.list.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                    ))}
                </ul>
                )}
            </div>
            ))}
        </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
