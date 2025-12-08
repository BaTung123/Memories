  import { useNavigate } from "react-router-dom";

  const Hochiminh = () => {
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

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Hồ Chí Minh</h1>

        <div style={styles.cardGrid}>
          {services.map((service) => (
            <div key={service.id} style={styles.card}>
              <img
                src={service.image}
                alt={service.description}
                style={styles.cardImage}
              />

              <div style={styles.cardContent}>
                <div style={styles.description}>
                  {service.description}
                </div>

                <button
                  style={styles.detailButton}
                  onClick={() => navigate(`/detail/${service.id}`)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Hochiminh;

  const styles = {
    container: {
      padding: "40px 100px",
      background: "#f5f5f5",
      minHeight: "100vh",
    },

    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "40px",
      color: "#333",
    },

    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },

    card: {
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    },

    cardImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },

    cardContent: {
      padding: "20px",
    },

    description: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "15px",
      lineHeight: "1.5",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },

    detailButton: {
      width: "100%",
      padding: "10px",
      background: "#fff",
      border: "1px solid #333",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };
