import React from "react";
import { Layout } from "antd";

// Components
import Navbar from "../Navbar/Navbar";

const HeaderComp = () => {
  const { Header } = Layout;
  return (
    <>
      <Header>
        <Navbar />
      </Header>
    </>
  );
};

export default HeaderComp;
