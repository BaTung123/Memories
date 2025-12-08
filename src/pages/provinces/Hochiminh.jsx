  import { useNavigate } from "react-router-dom";

  const Hochiminh = () => {
    const navigate = useNavigate();

    const services = [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
        name: "Trẻ hóa toàn thân",
        description: "Trẻ hóa toàn thân bằng mặt nạ vi tảo giúp làn da căng bóng, mịn màng và trẻ trung hơn.",
        fullDescription: "Trẻ hóa toàn thân bằng mặt nạ vi tảo giúp làn da căng bóng, mịn màng và trẻ trung hơn. Liệu trình chuyên sâu kết hợp massage thư giãn.",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400",
        name: "Trẻ hóa và làm sáng da",
        description: "Trẻ hóa và làm sáng da bằng mặt nạ dâu tằm thiên nhiên giúp phục hồi làn da hư tổn.",
        fullDescription: "Trẻ hóa và làm sáng da bằng mặt nạ dâu tằm thiên nhiên, giúp phục hồi làn da xỉn màu và yếu.",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400",
        name: "Trẻ hóa toàn thân",
        description: "Trẻ hóa toàn thân bằng mặt nạ parafin giúp dưỡng ẩm, tái tạo da và thư giãn.",
        fullDescription: "Trẻ hóa toàn thân bằng mặt nạ parafin giúp dưỡng ẩm, tái tạo da và thư giãn sâu.",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
        name: "Tẩy da chết",
        description: "Tẩy da chết và thư giãn cơ thể bằng muối và vitamin giúp loại bỏ tế bào chết.",
        fullDescription: "Tẩy da chết và thư giãn cơ thể bằng muối và vitamin giúp loại bỏ tế bào chết, cải thiện tuần hoàn máu.",
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
