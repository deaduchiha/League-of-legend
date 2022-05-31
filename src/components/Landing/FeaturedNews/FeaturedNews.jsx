import React from "react";

// Components
import FeatureCard from "./FeatureCard";

// Styles
import styles from "./FeaturedNews.module.css";

// Images
import khazix from "../../../assets/images/Future/khazix.jpg";

const FeaturedNews = () => {
  return (
    <>
      <div className={styles.container}>
        <FeatureCard image={khazix} />
        <FeatureCard image={khazix} />
        <FeatureCard image={khazix} />
      </div>
    </>
  );
};

export default FeaturedNews;
