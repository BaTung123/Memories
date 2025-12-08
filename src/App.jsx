import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Video from "./pages/Video";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Hochiminh from "./pages/provinces/Hochiminh";
import Hanoi from "./pages/provinces/Hanoi";
import Danang from "./pages/provinces/Danang";
import Cantho from "./pages/provinces/Cantho";
import Angiang from "./pages/provinces/Angiang";
import Haiphong from "./pages/provinces/Haiphong";
import Vungtau from "./pages/provinces/Vungtau";
import Bacgiang from "./pages/provinces/Bacgiang";
import Backan from "./pages/provinces/Backan";
import Baclieu from "./pages/provinces/Baclieu";
import Bacninh from "./pages/provinces/Bacninh";
import Bentre from "./pages/provinces/Bentre";
import Binhdinh from "./pages/provinces/Binhdinh";
import Binhduong from "./pages/provinces/Binhduong";
import Binhphuoc from "./pages/provinces/Binhphuoc";
import Binhthuan from "./pages/provinces/Binhthuan";
import Camau from "./pages/provinces/Camau";
import Caobang from "./pages/provinces/Caobang";
import Daklak from "./pages/provinces/Daklak";
import Daknong from "./pages/provinces/Daknong";
import Dienbien from "./pages/provinces/Dienbien";
import Dongnai from "./pages/provinces/Dongnai";
import Dongthap from "./pages/provinces/Dongthap";
import Gialai from "./pages/provinces/Gialai";
import Hagiang from "./pages/provinces/Hagiang";
import Hanam from "./pages/provinces/Hanam";
import Hatinh from "./pages/provinces/Hatinh";
import Haiduong from "./pages/provinces/Haiduong";
import Haugiang from "./pages/provinces/Haugiang";
import Hoabinh from "./pages/provinces/Hoabinh";
import Hungyen from "./pages/provinces/Hungyen";
import Khanhhoa from "./pages/provinces/Khanhhoa";
import Kiengiang from "./pages/provinces/Kiengiang";
import Kontum from "./pages/provinces/Kontum";
import Laichau from "./pages/provinces/Laichau";
import Lamdong from "./pages/provinces/Lamdong";
import Langson from "./pages/provinces/Langson";
import Laocai from "./pages/provinces/Laocai";
import Longan from "./pages/provinces/Longan";
import Namdinh from "./pages/provinces/Namdinh";
import Nghean from "./pages/provinces/Nghean";
import Ninhbinh from "./pages/provinces/Ninhbinh";
import Ninhtuan from "./pages/provinces/Ninhtuan";
import Phutho from "./pages/provinces/Phutho";
import Phuyen from "./pages/provinces/Phuyen";
import Quangbinh from "./pages/provinces/Quangbinh";
import Quangnam from "./pages/provinces/Quangnam";
import Quangngai from "./pages/provinces/Quangngai";
import Quangninh from "./pages/provinces/Quangninh";
import Quangtri from "./pages/provinces/Quangtri";
import Soctrang from "./pages/provinces/Soctrang";
import Sonla from "./pages/provinces/Sonla";
import Tayninh from "./pages/provinces/Tayninh";
import Thaibinh from "./pages/provinces/Thaibinh";
import Thainguyen from "./pages/provinces/Thainguyen";
import Thanhhoa from "./pages/provinces/Thanhhoa";
import ThuaThienHue from "./pages/provinces/Thua-thien-hue";
import Tiengiang from "./pages/provinces/Tiengiang";
import Travinh from "./pages/provinces/Travinh";
import Tuyenquang from "./pages/provinces/Tuyenquang";
import Vinhlong from "./pages/provinces/Vinhlong";
import Vinhphuc from "./pages/provinces/Vinhphuc";
import Yenbai from "./pages/provinces/Yenbai";
import ImageManagement from "./pages/admin/ImageManagement";

function App() {
  const location = useLocation();

  const hideHeader = location.pathname === "/login" || location.pathname === "/image-management";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hochiminh" element={<Hochiminh />} />
        <Route path="/hanoi" element={<Hanoi />} />
        <Route path="/danang" element={<Danang />} />
        <Route path="/cantho" element={<Cantho />} />
        <Route path="/angiang" element={<Angiang />} />
        <Route path="/haiphong" element={<Haiphong />} />
        <Route path="/vungtau" element={<Vungtau />} />
        <Route path="/bacgiang" element={<Bacgiang />} />
        <Route path="/backan" element={<Backan />} />
        <Route path="/baclieu" element={<Baclieu />} />
        <Route path="/bacninh" element={<Bacninh />} />
        <Route path="/bentre" element={<Bentre />} />
        <Route path="/binhdinh" element={<Binhdinh />} />
        <Route path="/binhduong" element={<Binhduong />} />
        <Route path="/binhphuoc" element={<Binhphuoc />} />
        <Route path="/binhthuan" element={<Binhthuan />} />
        <Route path="/camau" element={<Camau />} />
        <Route path="/caobang" element={<Caobang />} />
        <Route path="/daklak" element={<Daklak />} />
        <Route path="/daknong" element={<Daknong />} />
        <Route path="/dienbien" element={<Dienbien />} />
        <Route path="/dongnai" element={<Dongnai />} />
        <Route path="/dongthap" element={<Dongthap />} />
        <Route path="/gialai" element={<Gialai />} />
        <Route path="/hagiang" element={<Hagiang />} />
        <Route path="/hanam" element={<Hanam />} />
        <Route path="/hatinh" element={<Hatinh />} />
        <Route path="/haiduong" element={<Haiduong />} />
        <Route path="/haugiang" element={<Haugiang />} />
        <Route path="/hoabinh" element={<Hoabinh />} />
        <Route path="/hungyen" element={<Hungyen />} />
        <Route path="/khanhhoa" element={<Khanhhoa />} />
        <Route path="/kiengiang" element={<Kiengiang />} />
        <Route path="/kontum" element={<Kontum />} />
        <Route path="/laichau" element={<Laichau />} />
        <Route path="/lamdong" element={<Lamdong />} />
        <Route path="/langson" element={<Langson />} />
        <Route path="/laocai" element={<Laocai />} />
        <Route path="/longan" element={<Longan />} />
        <Route path="/namdinh" element={<Namdinh />} />
        <Route path="/nghean" element={<Nghean />} />
        <Route path="/ninhbinh" element={<Ninhbinh />} />
        <Route path="/ninhtuan" element={<Ninhtuan />} />
        <Route path="/phutho" element={<Phutho />} />
        <Route path="/phuyen" element={<Phuyen />} />
        <Route path="/quangbinh" element={<Quangbinh />} />
        <Route path="/quangnam" element={<Quangnam />} />
        <Route path="/quangngai" element={<Quangngai />} />
        <Route path="/quangninh" element={<Quangninh />} />
        <Route path="/quangtri" element={<Quangtri />} />
        <Route path="/soctrang" element={<Soctrang />} />
        <Route path="/sonla" element={<Sonla />} />
        <Route path="/tayninh" element={<Tayninh />} />
        <Route path="/thaibinh" element={<Thaibinh />} />
        <Route path="/thainguyen" element={<Thainguyen />} />
        <Route path="/thanhhoa" element={<Thanhhoa />} />
        <Route path="/thua-thien-hue" element={<ThuaThienHue />} />
        <Route path="/tiengiang" element={<Tiengiang />} />
        <Route path="/travinh" element={<Travinh />} />
        <Route path="/tuyenquang" element={<Tuyenquang />} />
        <Route path="/vinhlong" element={<Vinhlong />} />
        <Route path="/vinhphuc" element={<Vinhphuc />} />
        <Route path="/yenbai" element={<Yenbai />} />
        <Route path="/image-management" element={<ImageManagement />} />
      </Routes>
    </>
  );
}

export default App;
