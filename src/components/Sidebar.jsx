import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  EditOutlined,
  PictureOutlined,
  SettingOutlined,
  LogoutOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <div className="sidebar-header">
        <div className="logo">M</div>
        {!collapsed && <h2 className="brand">Memories</h2>}
      </div>

      <nav className="menu">

        <Link className="menu-item" to="#">
          <HomeOutlined  className="icon" />
          {!collapsed && <span>Quản lý người dùng</span>}
        </Link>
        
        <Link className="menu-item active" to="/image-management">
          <PictureOutlined className="icon" />
          {!collapsed && <span>Quản lý hình ảnh</span>}
        </Link>

        <Link className="menu-item" to="#">
          <EditOutlined className="icon" />
          {!collapsed && <span>Quản lý video</span>}
        </Link>

        <Link className="menu-item" to="#">
          <SettingOutlined className="icon" />
          {!collapsed && <span>Cài đặt</span>}
        </Link>

        <button className="menu-item logout">
          <LogoutOutlined className="icon" />
          {!collapsed && <span>Đăng xuất</span>}
        </button>

      </nav>

      <div className="sidebar-footer">
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;
