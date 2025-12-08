import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      image: "https://image.vietgoing.com/destination/large/vietgoing_ibi2104173571.webp",
      name: "Chợ Bến Thành",
      description: "Chợ Bến Thành - biểu tượng nổi tiếng của Sài Gòn, nơi mua sắm và thưởng thức ẩm thực.",
      fullDescription: "Chợ Bến Thành là một trong những địa điểm du lịch nổi tiếng nhất tại TP Hồ Chí Minh, nổi bật với kiến trúc cổ điển và các gian hàng đa dạng từ quần áo, đồ lưu niệm đến ẩm thực phong phú."
    },
    {
      id: 2,
      image: "https://images2.thanhnien.vn/528068263637045248/2025/12/1/2-17645593508271552062825.jpg",
      name: "Nhà thờ Đức Bà",
      description: "Nhà thờ Đức Bà - kiến trúc Pháp cổ kính giữa lòng thành phố.",
      fullDescription: "Nhà thờ Đức Bà Sài Gòn là một trong những biểu tượng kiến trúc của thành phố, thu hút khách du lịch với vẻ đẹp cổ kính, không gian yên bình và những bức ảnh tuyệt đẹp."
    },
    {
      id: 3,
      image: "https://hcm360.net/images/post/2023/04/buudientrungtamthanhpho.webp",
      name: "Bưu điện Trung tâm Sài Gòn",
      description: "Bưu điện Trung tâm - công trình kiến trúc Pháp cổ với mái vòm và đồng hồ đặc trưng.",
      fullDescription: "Bưu điện Trung tâm Sài Gòn là một trong những địa điểm nổi bật với kiến trúc cổ kính, mái vòm lớn, cửa sổ kính màu và không gian rộng rãi, nơi bạn có thể chụp ảnh và trải nghiệm văn hóa."
    },
    {
      id: 4,
      image: "https://52hz.vn/wp-content/uploads/2022/09/dia-dao-cu-chi.jpg",
      name: "Địa đạo Củ Chi",
      description: "Địa đạo Củ Chi - khám phá hệ thống địa đạo nổi tiếng trong chiến tranh Việt Nam.",
      fullDescription: "Địa đạo Củ Chi là một trong những di tích lịch sử quan trọng, nơi bạn có thể tìm hiểu về chiến tranh, lịch sử quân sự và trải nghiệm hệ thống địa đạo độc đáo."
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
