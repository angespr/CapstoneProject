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
                        {/* Left Column */}
                        <div className="about_column">
                            {about.left.map((item, i) => (
                                <div className="about_section" key={i}>

                                    {item.heading && (
                                        <h3 className="about_subheading">
                                            {item.heading}
                                        </h3>
                                    )}

                                    {item.paragraph && (
                                        <p className="about_paragraph">
                                            {item.paragraph}
                                        </p>
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

                        {/* Right Column */}
                        <div className="about_column">
                            {about.right.map((item, i) => (
                                <div className="about_section" key={i}>

                                    {item.heading && (
                                        <h3 className="about_subheading">
                                            {item.heading}
                                        </h3>
                                    )}

                                    {item.paragraph && (
                                        <p className="about_paragraph">
                                            {item.paragraph}
                                        </p>
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

                    {/* Research Question */}
                    <div className="research_section">
                        <div className="research_question">

                            <h4 className="research_question_title">
                                Research Question
                            </h4>

                            <p className="research_question_text">
                                {about.research.question}
                            </p>

                        </div>
                    </div>

                    {/* Section Divider */}
                    <hr className="about_divider" />

                    {/* Methodology */}
                    <div className="methodology_section">
                        <h3 className="about_subheading">
                            {about.methodology.heading}
                        </h3>

                        <p className="about_paragraph">
                            {about.methodology.paragraph}
                        </p>

                        {/* Charts inserted from MethodologyCharts.jsx */}
                        <MethodologyCharts />

                        <div className="methodology_content">
                            {/* Left Methodology Column */}
                            <div className="methodology_column">
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

                                <div className="methodology_block">
                                    <h3 className="methodology_title">
                                        {about.methodology.tools.heading}
                                    </h3>

                                    <ul className="about_list">
                                        {about.methodology.tools.list.map((tool, i) => (
                                            <li key={i}>{tool}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Methodology Column */}
                            <div className="methodology_column">
                                <div className="methodology_block">
                                    <h3 className="methodology_title">
                                        {about.methodology.interviews.heading}
                                    </h3>

                                    <p className="methodology_text">
                                        {about.methodology.interviews.paragraph}
                                    </p>

                                    <ul className="about_list">
                                        {about.methodology.interviews.details.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>

                                    <p className="methodology_purpose">
                                        <strong>Purpose:</strong>{" "}
                                        {about.methodology.interviews.purpose}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Impact */}
                    {about.bottom.map((item, i) => (
                        <div className="impact_card" key={i}>
                            <h3 className="impact_title">
                                {item.heading}
                            </h3>

                            <p className="impact_text">
                                {item.paragraph}
                            </p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}