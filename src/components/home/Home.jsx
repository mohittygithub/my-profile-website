import React from "react";
import classes from "./Home.module.css";
import code from "../../images/code.ico";
import globe from "../../images/binary-world.png";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <h1 className={classes.hello}>Hello, world.</h1>
        <h1>Welcome to my website.</h1>
      </div>
      <img className={classes.code} src={code} alt="code" />
      <img className={classes.globe} src={globe} alt="globe" />
    </div>
  );
};
export default Home;
