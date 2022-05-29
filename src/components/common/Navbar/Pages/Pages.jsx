import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

// Styles
import styles from "./Pages.module.css";

const Pages = () => {
  const [pages, setPages] = useState([
    "game",
    "champions",
    "news",
    "patch notes",
    "universe",
  ]);
  return (
    <>
      {pages.map((page) => (
        <Button type="ghost" key={page} name={page} className={styles.button}>
          <Link to={`/${page}`}>{page}</Link>
        </Button>
      ))}
    </>
  );
};

export default Pages;
