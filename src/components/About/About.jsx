import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <PageHeader title={"About Me"} />
    </div>
  );
};
export default About;
