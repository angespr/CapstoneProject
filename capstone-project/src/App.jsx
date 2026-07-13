import Title from "./components/Title";
import Showcase from "./components/Showcase";
import KeyFindings from "./components/KeyFindings";
import Footer from "./components/Footer";
import { credits } from "./data/credits";

export default function App() {
  return (
    <>
      <Title />
      <Showcase credits={credits} />
      <KeyFindings />
      <Footer />
    </>
  );
}
