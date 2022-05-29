import React from "react";
import { Layout } from "antd";

// Components
import Navbar from "../../components/common/Navbar/Navbar";

const Landing = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>
          <Navbar />
        </Header>

        <Content style={{ height: "1000px", lineHeight: "1000px" }}>
          <h1>content</h1>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Landing;
