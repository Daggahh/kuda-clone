import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KudaCard from "./components/kudaCard";
import KudaInfo1 from "./components/KudaInfo1";
import KudaInfo2 from "./components/KudaInfo2";
import KudaInfo3 from "./components/Kudainfo3";
import Kudainfo4 from "./components/Kudainfo4";
import KudaInfo5 from "./components/Kudainfo5";
import Kudainfo6 from "./components/Kudainfo6";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";

function App() {
  return (
    <div>
      <Navbar />
      <div className="kuda-main-container">
        <Hero />
        <KudaCard />
        <KudaInfo1 />
        <KudaInfo2 />
        <KudaInfo3 />
        <Kudainfo4 />
        <KudaInfo5 />
        <Kudainfo6 />
        <Testimonials />
        <Partners />
      </div>
    </div>
  );
}

export default App;
