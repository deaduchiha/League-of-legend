import React from "react";
import { Layout } from "antd";

// Components
import HeaderComp from "../../components/common/HeaderComp/HeaderComp";
import Title from "../../components/Landing/Title/Title";
import FeaturedNews from "../../components/Landing/FeaturedNews/FeaturedNews";

const Landing = () => {
  const { Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <HeaderComp />
        <Content style={{ background: "#fff" }}>
          <Title />
          <FeaturedNews />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Landing;
