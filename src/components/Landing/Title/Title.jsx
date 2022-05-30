import React from "react";
import { Button } from "antd";

// Styles
import styles from "./Title.module.css";

// Logo
import LOGO from "../../../assets/images/League LOGO.png";

// Videos
import video1 from "../../../assets/videos/Background video.webm";
import video2 from "../../../assets/videos/main video.webm";

const Title = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.video1}>
          <video
            width="100%"
            autoPlay="autoplay"
            loop={true}
            muted
            defaultmuted="true"
            playsInline
          >
            <source src={video1} type="video/webm" />
          </video>
        </div>
        <div className={styles.video2}>
          <video
            width="100%"
            autoPlay="autoplay"
            loop={true}
            muted
            defaultmuted="true"
            playsInline
          >
            <source src={video2} type="video/webm" />
          </video>
          <div className={styles.title}>
            <img src={LOGO} alt="LOGO" />
            <Button className={styles.button} type="ghost">
              Play for free
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
