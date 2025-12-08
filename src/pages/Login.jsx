import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div style={styles.container}>
      <div style={styles.marketingSection}>
        <div style={styles.marketingContent}>
          <h1 style={styles.marketingTitle}>
            Lưu giữ những khoảnh khắc
            <br />
            <span style={styles.marketingTitleAccent}>đáng nhớ trong cuộc sống.</span>
          </h1>
          <p style={styles.marketingDescription}>
            Ghi lại và lưu trữ hình ảnh, kỷ niệm quý giá của bạn một cách dễ dàng và trọn vẹn.
          </p>
          <div style={styles.illustration}>
            <svg width="400" height="300" viewBox="0 0 400 300" style={styles.illustrationSvg}>
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

      <div style={styles.loginSection}>
        <div style={styles.loginContent}>
          <div style={styles.logoContainer}>
            <span style={styles.logoText}>Đăng nhập</span>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button
              type="submit"
              style={styles.loginButton}
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

          <a href="/" style={styles.backLink}>
            &lt; Quay lại trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  marketingSection: {
    flex: 1,
    background: "#ffeed4",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px",
  },
  marketingContent: {
    maxWidth: "500px",
  },
  marketingTitle: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#654a21",
    marginBottom: "20px",
    lineHeight: "1.3",
  },
  marketingTitleAccent: {
    color: "#654a21",
  },
  marketingDescription: {
    fontSize: "16px",
    color: "#654a21",
    lineHeight: "1.6",
    marginBottom: "40px",
  },
  illustration: {
    marginTop: "40px",
  },
  illustrationSvg: {
    maxWidth: "100%",
    height: "auto",
  },
  loginSection: {
    flex: 1,
    background: "#654a21",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 40px",
    position: "relative",
  },
  loginContent: {
    width: "100%",
    maxWidth: "400px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
  },
  logoIcon: {
    fontSize: "24px",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "30px",
  },
  input: {
    padding: "14px 16px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    background: "#ffffff",
    color: "#1a1a1a",
    outline: "none",
  },
  loginButton: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    background: "#ffffff",
    color: "#654a21",
    cursor: "pointer",
    transition: "all 0.3s",
    width: "30%",
  },
  backLink: {
    position: "absolute",
    bottom: "30px",
    right: "40px",
    color: "#e8f5e9",
    textDecoration: "none",
    fontSize: "14px",
  },
};
