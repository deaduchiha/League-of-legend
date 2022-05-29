import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

// Styles
import styles from "./Sign.module.css";

const Sign = () => {
  const [pages, setPages] = useState(["SIGN IN", "PLAY NOW"]);
  return (
    <>
      {pages.map((page) => (
        <Button type="ghost" key={page} name={page} className={styles.button}>
          <Link to="">{page}</Link>
        </Button>
      ))}
    </>
  );
};

export default Sign;
