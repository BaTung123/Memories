import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

    const provinceList = [
      { name: "Hà Nội", path: "/hanoi" },
      { name: "Hồ Chí Minh", path: "/hochiminh" },
      { name: "Hải Phòng", path: "/haiphong" },
      { name: "Đà Nẵng", path: "/danang" },
      { name: "Cần Thơ", path: "/cantho" },
      { name: "An Giang", path: "/angiang" },
      { name: "Bà Rịa – Vũng Tàu", path: "/baria-vungtau" },
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
    <header style={styles.header}>
      <h2 style={styles.logo}>KỈ NIỆM</h2>

      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Trang Chủ</Link>

        <div
          style={styles.dropdownWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span 
            style={{
              ...styles.link,
              ...(open ? styles.linkHover : {}),
            }}
          >
            Hình ảnh ▾
          </span>

          {open && (
            <>
              <div
                style={styles.dropdownBridge}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <div
                style={styles.dropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
              {provinceList.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={styles.dropdownItem}
                  className="dropdown-item"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              </div>
            </>
          )}
        </div>

        <Link style={styles.link} to="/video">Video</Link>
        <Link style={styles.link} to="/about">Giới Thiệu</Link>
        <Link style={styles.link} to="/contact">Liên Hệ</Link>
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0px 100px",
    background: "#1d1f2b",
    height: "60px",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    marginRight: "350px",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer",
    fontSize: "16px",
  },

  dropdownWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  dropdownBridge: {
    position: "absolute",
    top: "100%",
    left: "0",
    width: "100%",
    height: "10px",
    zIndex: 998,
  },

  dropdown: {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: "0",
    width: "600px",
    maxHeight: "400px",
    overflowY: "auto",
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    zIndex: 999,
    animation: "fadeIn 0.2s ease-in-out",
  },

  dropdownItem: {
    background: "#f3f3f3",
    padding: "10px 12px",
    borderRadius: "8px",
    color: "#333",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "14px",
    transition: "all 0.2s ease",
    display: "block",
    cursor: "pointer",
  },

  linkHover: {
    color: "#646cff",
    transition: "color 0.2s ease",
  },

  // thêm keyframes cho fadeIn
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(-10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
};

