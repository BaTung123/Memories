  import { useNavigate } from "react-router-dom";
  import "./Province.css";

  const Vungtau = () => {
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
      <div className="provinceContainer">
        <h1 className="provinceTitle">Vũng Tàu</h1>

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

  export default Vungtau;
