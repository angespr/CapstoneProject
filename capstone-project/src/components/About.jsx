import Reveal from "./Reveal";
import UrgencyTag from "./UrgencyTag";
import { about } from "../data/about";
import "../css/About.css";
import MethodologyCharts from "./MethodologyCharts";

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

        <div className="methodology_section">
          <h3 className="about_subheading">
            {about.methodology.heading}
          </h3>
          <p className="about_paragraph">
            {about.methodology.paragraph}
          </p>

          <MethodologyCharts />

          <div className="methodology_block">
          <h3 className="methodology_title">
            {about.methodology.collection.heading}
          </h3>

          <ul className="about_list">
            {about.methodology.collection.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

        </div>

        </div>

        <hr className="about_divider" />

        {about.bottom.map((item, i) => (
        <div className="about_bottom" key={i}>
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

        </Reveal>
      </div>
    </section>
  );
}
