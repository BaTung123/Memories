import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className="loginContainer">
      <div className="marketingSection">
        <div className="marketingContent">
          <h1 className="marketingTitle">
            Lưu giữ những khoảnh khắc
            <br />
            <span className="marketingTitleAccent">đáng nhớ trong cuộc sống.</span>
          </h1>
          <p className="marketingDescription">
            Ghi lại và lưu trữ hình ảnh, kỷ niệm quý giá của bạn một cách dễ dàng và trọn vẹn.
          </p>
          <div className="illustration">
            <svg width="400" height="300" viewBox="0 0 400 300" className="illustrationSvg">
              {/* Khung chính */}
              <rect x="50" y="30" width="300" height="240" rx="15" fill="#654a21" />
              {/* Khung ảnh nhỏ bên trong */}
              <rect x="70" y="50" width="120" height="80" rx="8" fill="#f5e0c3" />
              <rect x="210" y="50" width="120" height="80" rx="8" fill="#f5e0c3" />
              <rect x="70" y="150" width="120" height="80" rx="8" fill="#f5e0c3" />
              <rect x="210" y="150" width="120" height="80" rx="8" fill="#f5e0c3" />
              {/* Hình trái tim tượng trưng cho kỷ niệm */}
              <path d="M200 140 
                      C190 120, 160 120, 160 150 
                      C160 180, 200 210, 200 210 
                      C200 210, 240 180, 240 150 
                      C240 120, 210 120, 200 140 Z"
                    fill="#ff6b6b" />
              {/* Các chi tiết trang trí nhỏ */}
              <circle cx="80" cy="220" r="8" fill="#ffda79" />
              <circle cx="320" cy="220" r="8" fill="#ffda79" />
            </svg>
          </div>
        </div>
      </div>

      <div className="loginSection">
        <div className="loginContent">
          <div className="logoContainer">
            <span className="logoText">Đăng nhập</span>
          </div>

          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="loginInput"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="loginInput"
              required
            />
            <button
              type="submit"
              className="loginSubmitButton"
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Login
            </button>
          </form>

          <a href="/" className="backLink">
            &lt; Quay lại trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
