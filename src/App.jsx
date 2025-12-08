import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Video from "./pages/Video";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hochiminh from "./pages/provinces/Hochiminh";
import Hanoi from "./pages/provinces/Hanoi";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hcm" element={<Hochiminh />} />
        <Route path="/hanoi" element={<Hanoi />} />
      </Routes>
    </>
  );
}

export default App;

