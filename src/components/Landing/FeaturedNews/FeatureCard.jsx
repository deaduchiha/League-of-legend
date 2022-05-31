import React from "react";
import { Card, Col, Row } from "antd";

// Styles
import styles from "./FeaturedNews.module.css";

// Card bodyStyles
const bodyStyle = {
  width: "350px",
  padding: "0",
};

const FeatureCard = (props) => {
  return (
    <>
      <Row type="flex" justify="center">
        <Card hoverable bodyStyle={bodyStyle}>
          <Row className={styles.cardContainer}>
            <Col span={10}>
              <img src={props.image} alt="khazix" />
            </Col>
            <Col span={14}>
              <Card bordered={false} className={styles.card}>
                <p>team fight</p>
                <p>team fight</p>
                <p>team fight</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </Row>
    </>
  );
};

export default FeatureCard;
