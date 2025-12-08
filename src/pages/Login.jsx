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
              {/* Screen */}
              <rect x="100" y="50" width="200" height="150" rx="8" fill="#1a237e" />
              {/* Chart bars */}
              <rect x="120" y="120" width="20" height="60" fill="#fff" />
              <rect x="150" y="100" width="20" height="80" fill="#64b5f6" />
              <rect x="180" y="110" width="20" height="70" fill="#fff" />
              <rect x="210" y="90" width="20" height="90" fill="#64b5f6" />
              <rect x="240" y="105" width="20" height="75" fill="#fff" />
              {/* Person 1 - Woman */}
              <circle cx="80" cy="230" r="25" fill="#ff6b6b" />
              <rect x="65" y="250" width="30" height="40" rx="5" fill="#ff6b6b" />
              {/* Person 2 - Man */}
              <circle cx="320" cy="230" r="25" fill="#ffa726" />
              <rect x="305" y="250" width="30" height="40" rx="5" fill="#ffa726" />
              {/* Person 3 - Kneeling */}
              <circle cx="200" cy="260" r="20" fill="#66bb6a" />
              <rect x="185" y="275" width="30" height="30" rx="5" fill="#66bb6a" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={styles.loginSection}>
        <div style={styles.loginContent}>
          {/* Logo */}
          <div style={styles.logoContainer}>
            <span style={styles.logoText}>Đăng nhập</span>
          </div>

          {/* Form */}
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

          {/* Back to site */}
          <a href="/" style={styles.backLink}>
            &lt; Back to site
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
    background: "#ffffff",
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
    color: "#1a1a1a",
    marginBottom: "20px",
    lineHeight: "1.3",
  },
  marketingTitleAccent: {
    color: "#1a237e",
  },
  marketingDescription: {
    fontSize: "16px",
    color: "#666",
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
    background: "#4caf50",
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
    color: "#1a1a1a",
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
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    background: "#ffffff",
    color: "#4caf50",
    cursor: "pointer",
    transition: "all 0.3s",
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
