import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import classes from "./About.module.css";
import me from "../../images/profile1.jpg";

const About = () => {
  return (
    <div className={classes.aboutme} id="about">
      <PageHeader title={"About Me"} />
      <div className={classes.container}>
        <div className={classes.text}>
          <h2>Hi! I'm Mohit Tyagi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            facere soluta atque iusto facilis, explicabo sapiente doloremque
            assumenda iste maiores repellat quaerat corrupti eaque laudantium,
            delectus illo obcaecati amet nulla. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae, facere soluta atque iusto
            facilis, explicabo sapiente doloremque assumenda iste maiores
            repellat quaerat corrupti eaque laudantium, delectus illo obcaecati
            amet nulla.
          </p>
        </div>
        <div className={classes.photo}>
          <img className={classes.me} src={me} alt="me" />
        </div>
      </div>
    </div>
  );
};
export default About;
