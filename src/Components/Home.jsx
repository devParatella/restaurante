import Slider from "./Slider";
import About from "./About";
import Contact from "./Contact";
import Price from "./Price";
import Services from "./Services";
import Team from "./Team";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Contact />
      <Price />
      <Services />
      <Team />
    </div>
  )
}