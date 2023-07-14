import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import SideBar from "./SideBar";
import AppBar from "./AppBar";

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout>
        <AppBar />
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
