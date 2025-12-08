import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
      name: "Trẻ hóa toàn thân",
      fullDescription:
        "Trẻ hóa toàn thân bằng mặt nạ vi tảo giúp làn da căng bóng, mịn màng và trẻ trung hơn. Liệu trình chuyên sâu kết hợp massage thư giãn.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400",
      name: "Trẻ hóa và làm sáng da",
      fullDescription:
        "Trẻ hóa và làm sáng da bằng mặt nạ dâu tằm thiên nhiên, giúp phục hồi làn da xỉn màu và yếu.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400",
      name: "Trẻ hóa toàn thân",
      fullDescription:
        "Trẻ hóa toàn thân bằng mặt nạ parafin giúp dưỡng ẩm, tái tạo da và thư giãn sâu.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
      name: "Tẩy da chết",
      fullDescription:
        "Tẩy da chết và thư giãn cơ thể bằng muối và vitamin giúp loại bỏ tế bào chết, cải thiện tuần hoàn máu.",
    },
  ];

  const service = services.find((item) => item.id === Number(id));

  const handleDownload = async () => {
    try {
      const response = await fetch(service.image);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${service.name}.jpg`;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Tải ảnh thất bại!");
      console.error(error);
    }
  };

  if (!service) {
    return <h2 style={{ padding: 40 }}>Không tìm thấy dịch vụ</h2>;
  }

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div style={styles.detailWrapper}>
        <img
          src={service.image}
          alt={service.name}
          style={styles.image}
        />

        <div style={styles.info}>
          <h1 style={styles.title}>{service.name}</h1>
          <p style={styles.description}>{service.fullDescription}</p>

          {/* ✅ NÚT TẢI ẢNH */}
          <button style={styles.bookBtn} onClick={handleDownload}>
            Tải xuống
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

const styles = {
  container: {
    padding: "40px 100px",
    background: "#f5f5f5",
    minHeight: "100vh",
  },

  backBtn: {
    marginBottom: "20px",
    border: "none",
    background: "transparent",
    fontSize: "16px",
    cursor: "pointer",
    color: "#333",
  },

  detailWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "450px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  description: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#444",
    marginBottom: "30px",
  },

  bookBtn: {
    width: "200px",
    padding: "12px",
    background: "#1d1f2b",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    margin: "0 auto",
    display: "block",
  },
};
