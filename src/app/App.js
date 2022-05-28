import "./App.css";

import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ color: "white" }}>Header</Header>
        <Content>
          <h1>content</h1>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
