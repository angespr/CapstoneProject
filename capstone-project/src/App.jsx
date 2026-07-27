import Title from "./components/Title";
import About from "./components/About";
import KeyFindings from "./components/KeyFindings";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import { credits } from "./data/credits";

export default function App() {
  return (
    <>
      <Title />
      <About />
      <KeyFindings />
      <Showcase credits={credits} />
      <Footer />
    </>
  );
}
