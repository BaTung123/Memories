import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

    const navigate = useNavigate();

    const provinceList = [
      { name: "Hà Nội", path: "/hanoi" },
      { name: "Hồ Chí Minh", path: "/hochiminh" },
      { name: "Hải Phòng", path: "/haiphong" },
      { name: "Đà Nẵng", path: "/danang" },
      { name: "Cần Thơ", path: "/cantho" },
      { name: "An Giang", path: "/angiang" },
      { name: "Bà Rịa – Vũng Tàu", path: "/vungtau" },
      { name: "Bắc Giang", path: "/bacgiang" },
      { name: "Bắc Kạn", path: "/backan" },
      { name: "Bạc Liêu", path: "/baclieu" },
      { name: "Bắc Ninh", path: "/bacninh" },
      { name: "Bến Tre", path: "/bentre" },
      { name: "Bình Định", path: "/binhdinh" },
      { name: "Bình Dương", path: "/binhduong" },
      { name: "Bình Phước", path: "/binhphuoc" },
      { name: "Bình Thuận", path: "/binhthuan" },
      { name: "Cà Mau", path: "/camau" },
      { name: "Cao Bằng", path: "/caobang" },
      { name: "Đắk Lắk", path: "/daklak" },
      { name: "Đắk Nông", path: "/daknong" },
      { name: "Điện Biên", path: "/dienbien" },
      { name: "Đồng Nai", path: "/dongnai" },
      { name: "Đồng Tháp", path: "/dongthap" },
      { name: "Gia Lai", path: "/gialai" },
      { name: "Hà Giang", path: "/hagiang" },
      { name: "Hà Nam", path: "/hanam" },
      { name: "Hà Tĩnh", path: "/hatinh" },
      { name: "Hải Dương", path: "/haiduong" },
      { name: "Hậu Giang", path: "/haugiang" },
      { name: "Hòa Bình", path: "/hoabinh" },
      { name: "Hưng Yên", path: "/hungyen" },
      { name: "Khánh Hòa", path: "/khanhhoa" },
      { name: "Kiên Giang", path: "/kiengiang" },
      { name: "Kon Tum", path: "/kontum" },
      { name: "Lai Châu", path: "/laichau" },
      { name: "Lâm Đồng", path: "/lamdong" },
      { name: "Lạng Sơn", path: "/langson" },
      { name: "Lào Cai", path: "/laocai" },
      { name: "Long An", path: "/longan" },
      { name: "Nam Định", path: "/namdinh" },
      { name: "Nghệ An", path: "/nghean" },
      { name: "Ninh Bình", path: "/ninhbinh" },
      { name: "Ninh Thuận", path: "/ninhtuan" },
      { name: "Phú Thọ", path: "/phutho" },
      { name: "Phú Yên", path: "/phuyen" },
      { name: "Quảng Bình", path: "/quangbinh" },
      { name: "Quảng Nam", path: "/quangnam" },
      { name: "Quảng Ngãi", path: "/quangngai" },
      { name: "Quảng Ninh", path: "/quangninh" },
      { name: "Quảng Trị", path: "/quangtri" },
      { name: "Sóc Trăng", path: "/soctrang" },
      { name: "Sơn La", path: "/sonla" },
      { name: "Tây Ninh", path: "/tayninh" },
      { name: "Thái Bình", path: "/thaibinh" },
      { name: "Thái Nguyên", path: "/thainguyen" },
      { name: "Thanh Hóa", path: "/thanhhoa" },
      { name: "Thừa Thiên – Huế", path: "/thua-thien-hue" },
      { name: "Tiền Giang", path: "/tiengiang" },
      { name: "Trà Vinh", path: "/travinh" },
      { name: "Tuyên Quang", path: "/tuyenquang" },
      { name: "Vĩnh Long", path: "/vinhlong" },
      { name: "Vĩnh Phúc", path: "/vinhphuc" },
      { name: "Yên Bái", path: "/yenbai" }
    ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="header">
        <div className="logoWrapper">
          <h2 className="logo_header">Memories</h2>
        </div>

        <nav className="nav">
          <Link className="link" to="/" onClick={() => setMobileMenuOpen(false)}>Trang Chủ</Link>

          <div
            className="dropdownWrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={`link ${open ? "linkHover" : ""}`}>
              Hình ảnh ▾
            </span>

            {open && (
              <>
                <div
                  className="dropdownBridge"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                <div
                  className="dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {provinceList.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="dropdownItem"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link className="link" to="/video" onClick={() => setMobileMenuOpen(false)}>Video</Link>
          <Link className="link" to="/about" onClick={() => setMobileMenuOpen(false)}>Giới Thiệu</Link>
          <Link className="link" to="/contact" onClick={() => setMobileMenuOpen(false)}>Liên Hệ</Link>
        </nav>

        <div className="loginButtonWrapper">
          <button
            className="loginButton"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </button>
        </div>

        <button
          className="mobileMenuButton"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span className="hamburgerIcon">
            {mobileMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobileMenu">
          <Link className="mobileLink" to="/" onClick={() => setMobileMenuOpen(false)}>Trang Chủ</Link>
          <div className="mobileDropdownSection">
            <div className="mobileDropdownHeader" onClick={() => setOpen(!open)}>
              Hình ảnh {open ? "▴" : "▾"}
            </div>
            {open && (
              <div className="mobileDropdown">
                {provinceList.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="mobileDropdownItem"
                    onClick={() => {
                      setOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link className="mobileLink" to="/video" onClick={() => setMobileMenuOpen(false)}>Video</Link>
          <Link className="mobileLink" to="/about" onClick={() => setMobileMenuOpen(false)}>Giới Thiệu</Link>
          <Link className="mobileLink" to="/contact" onClick={() => setMobileMenuOpen(false)}>Liên Hệ</Link>
          <button
            className="mobileLoginButton"
            onClick={() => {
              navigate("/login");
              setMobileMenuOpen(false);
            }}
          >
            Đăng nhập
          </button>
        </div>
      )}
    </>
  );
};

export default Header;

