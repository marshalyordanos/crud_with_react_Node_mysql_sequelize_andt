import React from "react";
import styled from "styled-components";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton } from "@mui/material";
import { Dropdown, Menu } from "antd";

import { useNavigate } from "react-router-dom";

const AppHeader = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const handleLogout = () => {};

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p onClick={handleLogout}>Logout</p>,
        },
      ]}
    />
  );
  return (
    <HeaderCon>
      <div>
        {/* <SideBarToggler>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </SideBarToggler> */}
      </div>
      <LeftIconCon>
        <div></div>
        <NotifcationIcon>
          <p>99</p>
          <IconButton>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
        </NotifcationIcon>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          </Dropdown>
        </div>
      </LeftIconCon>
    </HeaderCon>
  );
};

const HeaderCon = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SideBarToggler = styled.div`
  margin: 0 15px;
  .trigger {
    font-size: 18px;
  }
`;
const LeftIconCon = styled.div`
  display: flex;
  margin-right: 35px;
  align-items: center;

  > div {
    margin: 0 9px;
    align-self: start;
    /* border: 1px solid lightgray; */
    > p {
      align-self: center;
      padding-top: 8px;
    }
  }
`;
const NotifcationIcon = styled.div`
  position: relative;

  p {
    position: absolute;
    background-color: #cd3300;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 20px;
    min-width: 20px;
    height: 20px;
    color: white;
    border-radius: 50%;
    text-align: center;
  }
`;

export default AppHeader;
