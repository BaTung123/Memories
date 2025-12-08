  import { useNavigate } from "react-router-dom";
  import "./Province.css";

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
      <div className="provinceContainer">
        <h1 className="provinceTitle">Hồ Chí Minh</h1>

        <div className="provinceCardGrid">
          {services.map((service) => (
            <div key={service.id} className="provinceCard">
              <img
                src={service.image}
                alt={service.description}
                className="provinceCardImage"
              />

              <div className="provinceCardContent">
                <div className="provinceCardDescription">
                  {service.description}
                </div>

                <button
                  className="provinceDetailButton"
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
