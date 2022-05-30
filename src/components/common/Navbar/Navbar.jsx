import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Drawer } from "antd";

// Components
import Pages from "./Pages/Pages";
import Sign from "./Sign/Sign";
import Landing from "../../../screen/Landing/Landing";

// Styles
import styles from "./Navbar.module.css";

// Icons
import { ReactComponent as RiotGames } from "../../../assets/images/RiotGames.svg";
import MenuOutlined from "@ant-design/icons/MenuOutlined";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Header className={styles.header}>
        <div className={`${styles.menuItems}`}>
          <Link
            to="/"
            element={<Landing />}
            style={{ display: "flex", alignItems: "center" }}
          >
            <RiotGames />
          </Link>
        </div>

        <div className={`${styles.menuItems} ${styles.mobileHidden}`}>
          <div>
            <Pages />
          </div>
          <div>
            <Sign />
          </div>
        </div>
        <div className={styles.mobileVisibile}>
          <Button
            type="ghost"
            className={styles.menuDrawer}
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
          <Drawer
            className={styles.drawer}
            placement="right"
            onClose={onClose}
            width={window.innerWidth > 576 ? "378px" : "75%"}
            visible={visible}
            bodyStyle={{
              background: "#1f1f1f",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              textAlign: "center",
              gap: "15px",
              paddingTop: "26px",
            }}
            headerStyle={{
              background: "#1f1f1f",
              color: "#fff",
              width: "100%",
            }}
          >
            <Pages />
            <Sign />
          </Drawer>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
