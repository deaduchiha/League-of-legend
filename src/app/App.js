import "./App.css";
import { Layout, Menu } from "antd";
import Navbar from "../components/common/Navbar/Navbar";



const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>

        <Content style={{ height: "1000px", lineHeight: "1000px" }}>
          <h1>content</h1>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
