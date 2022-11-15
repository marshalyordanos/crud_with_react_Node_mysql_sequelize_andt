import { Layout } from "antd";
import React, { useState } from "react";
import "./Layout.css";
import styled from "styled-components";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
const { Header, Sider, Content } = Layout;
const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <LayoutStyle>
      <LeftSidebarStyle
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
        width={250}
        trigger={null}
        collapsible
        // collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
          console.log(broken);
        }}
        onCollapse={(collapsed1, type) => {
          console.log("cccccccccccccccccccccccccccccccccccccccc");
          setCollapsed(collapsed1);
          console.log(collapsed, type);
        }}
        breakpoint="lg"
        collapsedWidth="80"
      >
        <AppSidebar collapsed={collapsed} />
      </LeftSidebarStyle>
      <Layout
        style={{ marginLeft: collapsed ? 80 : 250, height: "100%" }}
        className="site-layout"
      >
        <div
          className="site-layout-background"
          style={{
            alignItems: "center",
            position: "fixed",
            padding: 0,
            width: collapsed ? "calc(100vw - 80px)" : "calc(100vw - 250px)",
            zIndex: 50,
            borderBottom: "1px solid lightgray",
          }}
        >
          <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              marginTop: 80,
              minHeight: 280,
              height: "100%",
            }}
          >
            <AppContent />
          </Content>
        </Layout>
      </Layout>
    </LayoutStyle>
  );
};

const LayoutStyle = styled(Layout)`
  min-height: 100vh;
  .logo {
    height: 45px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const LeftSidebarStyle = styled(Sider)`
  background-color: #2a4573;
`;

export default AppLayout;
