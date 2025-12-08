import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined, CloseOutlined, PictureOutlined } from "@ant-design/icons";
import "./ImageManagement.css";

const ImageManagement = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    fullDescription: "",
    image: null,
    imagePreview: null
  });

  // Data giả từ Hochiminh.jsx
  const [images, setImages] = useState([
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
  ]);

  useEffect(() => {
    const handleSidebarToggle = () => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar) {
        setSidebarCollapsed(sidebar.classList.contains("collapsed"));
      }
    };

    const observer = new MutationObserver(handleSidebarToggle);
    const sidebar = document.querySelector(".sidebar");
    
    if (sidebar) {
      observer.observe(sidebar, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setFormData({
      name: "",
      description: "",
      fullDescription: "",
      image: null,
      imagePreview: null
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      description: "",
      fullDescription: "",
      image: null,
      imagePreview: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.fullDescription) {
      const newImage = {
        id: images.length + 1,
        name: formData.name,
        description: formData.description,
        fullDescription: formData.fullDescription,
        image: formData.imagePreview || formData.image
      };
      setImages([...images, newImage]);
      handleCloseModal();
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa hình ảnh này?")) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  return (
    <div className="imageManagementLayout">
      <Sidebar />   
      <div className={`imageManagementContainer ${sidebarCollapsed ? "sidebarCollapsed" : ""}`}>
        <div className="imageManagementContent">
          <div className="imageManagementHeader">
            <h1 className="imageManagementTitle">Quản lý hình ảnh</h1>
            <div className="imageManagementActions">
              <button className="btn btnSecondary">
                <SearchOutlined />
                Tìm kiếm
              </button>
              <button className="btn btnPrimary" onClick={handleOpenModal}>
                <PlusOutlined />
                Thêm mới
              </button>
            </div>
          </div>

          <div className="imageManagementStats">
            <div className="statCard">
              <div className="statCardTitle">Tổng số ảnh</div>
              <div className="statCardValue">{images.length}</div>
            </div>
            <div className="statCard">
              <div className="statCardTitle">Đã tải lên hôm nay</div>
              <div className="statCardValue">0</div>
            </div>
            <div className="statCard">
              <div className="statCardTitle">Dung lượng đã dùng</div>
              <div className="statCardValue">0 MB</div>
            </div>
            <div className="statCard">
              <div className="statCardTitle">Tổng lượt xem</div>
              <div className="statCardValue">0</div>
            </div>
          </div>

          <div className="imageManagementMain">
            <div className="tableContainer">
              <table className="dataTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Mô tả</th>
                    <th>Mô tả đầy đủ</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {images.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <img src={item.image} alt={item.name} className="tableImage" />
                      </td>
                      <td>{item.name}</td>
                      <td className="tableDescription">{item.description}</td>
                      <td className="tableFullDescription">{item.fullDescription}</td>
                      <td>
                        <div className="tableActions">
                          <button className="actionBtn editBtn" title="Chỉnh sửa">
                            <EditOutlined />
                          </button>
                          <button className="actionBtn deleteBtn" onClick={() => handleDelete(item.id)} title="Xóa">
                            <DeleteOutlined />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modalOverlay" onClick={handleCloseModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h2 className="modalTitle">Thêm hình ảnh mới</h2>
              <button className="modalCloseBtn" onClick={handleCloseModal}>
                <CloseOutlined />
              </button>
            </div>
            <form className="modalForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label className="formLabel">Tên</label>
                <input
                  type="text"
                  name="name"
                  className="formInput"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nhập tên hình ảnh"
                  required
                />
              </div>
              <div className="formGroup">
                <label className="formLabel">Mô tả</label>
                <textarea
                  name="description"
                  className="formTextarea"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Nhập mô tả ngắn"
                  rows="3"
                  required
                />
              </div>
              <div className="formGroup">
                <label className="formLabel">Mô tả đầy đủ</label>
                <textarea
                  name="fullDescription"
                  className="formTextarea"
                  value={formData.fullDescription}
                  onChange={handleInputChange}
                  placeholder="Nhập mô tả đầy đủ"
                  rows="5"
                  required
                />
              </div>
              <div className="formGroup">
                <label className="formLabel">Hình ảnh</label>
                <div className="imageUploadArea">
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="imageUploadInput"
                  />
                  <label htmlFor="imageUpload" className="imageUploadLabel">
                    {formData.imagePreview ? (
                      <img src={formData.imagePreview} alt="Preview" className="imagePreview" />
                    ) : (
                      <div className="imageUploadPlaceholder">
                        <PictureOutlined className="uploadIcon" />
                        <span>Chọn hoặc kéo thả hình ảnh vào đây</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              <div className="modalActions">
                <button type="button" className="btn btnSecondary" onClick={handleCloseModal}>
                  Hủy
                </button>
                <button type="submit" className="btn btnPrimary">
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};  

export default ImageManagement;
