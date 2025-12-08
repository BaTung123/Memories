import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Video from "./pages/Video";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Hochiminh from "./pages/provinces/Hochiminh";
import Hanoi from "./pages/provinces/Hanoi";
import Danang from "./pages/provinces/Danang";
import Cantho from "./pages/provinces/Cantho";
import Angiang from "./pages/provinces/Angiang";
import Haiphong from "./pages/provinces/Haiphong";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/hochiminh" element={<Hochiminh />} />
        <Route path="/hanoi" element={<Hanoi />} />
        <Route path="/danang" element={<Danang />} />
        <Route path="/cantho" element={<Cantho />} />
        <Route path="/angiang" element={<Angiang />} />
        <Route path="/haiphong" element={<Haiphong />} />
      </Routes>
    </>
  );
}

export default App;

