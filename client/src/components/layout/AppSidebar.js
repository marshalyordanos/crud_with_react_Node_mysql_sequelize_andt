import React, { useEffect, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
const AppSidebar = ({ collapsed }) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(["3"]);
  let xx;

  return (
    <div>
      <LogoCon collapsed={collapsed} className="logo"></LogoCon>
      <SiderMenu
        mode="inline"
        defaultSelectedKeys={xx}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: (
              <NavLink end to={"/files"} rel="noopener noreferrer">
                Files
              </NavLink>
            ),
          },
        ]}
      />
    </div>
  );
};

const SiderMenu = styled(Menu)`
  background-color: #2a4573;
  color: white;
  a {
    color: white;
  }
  a.active {
    color: blue !important;
  }
`;

const LogoCon = styled.div`
  /* overflow: hidden; */
  display: flex;
  /* border: 1px solid red; */
  /* align-items: center; */
  img {
    margin-top: 4px;
    /* border: 1px solid green; */
    width: ${(props) => (props.collapsed ? "100%" : "30%")};
    height: 160%;
  }
  p {
    align-self: center;
    color: white;
    font-weight: bolder;
    margin-top: 8px;
  }
`;

export default AppSidebar;
