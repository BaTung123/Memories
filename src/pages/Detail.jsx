import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";

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
    <div className="detailContainer">
      <button className="backBtn" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div className="detailWrapper">
        <img
          src={service.image}
          alt={service.name}
          className="detailImage"
        />

        <div className="detailInfo">
          <h1 className="detailTitle">{service.name}</h1>
          <p className="detailDescription">{service.fullDescription}</p>

          <button className="detailBookBtn" onClick={handleDownload}>
            Tải xuống
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
