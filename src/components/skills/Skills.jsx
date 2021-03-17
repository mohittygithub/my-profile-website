import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import classes from "./Skills.module.css";

const Skills = () => {
  const frontEndSkills = (
    <ul>
      <li>FRONTEND</li>
      <li>ReactJs - Redux - HTML5 - CSS3</li>
    </ul>
  );
  const backEndSkills = (
    <ul>
      <li>BACKEND</li>
      <li>Java - NodeJS - SQL - MongoDB</li>
      <li>Spring Boot - Express - REST</li>
    </ul>
  );

  const otherSkills = (
    <ul>
      <li>OTHER</li>
      <li>Git - JSON - XML</li>
    </ul>
  );
  const testFrontEndSkills = (
    <ul>
      <li>FRONTEND</li>
      <li>ReactJs - Redux - HTML5 - CSS3</li>
    </ul>
  );
  const testBackEndSkills = (
    <ul>
      <li>BACKEND</li>
      <li>Java - NodeJS - SQL - MongoDB</li>
      <li>Spring Boot - Express - REST</li>
    </ul>
  );

  const testOtherSkills = (
    <ul>
      <li>OTHER</li>
      <li>Git - JSON - XML</li>
    </ul>
  );

  const totalSkills = [
    frontEndSkills,
    backEndSkills,
    otherSkills,
    testFrontEndSkills,
    testBackEndSkills,
    testOtherSkills,
  ];
  return (
    <div className={classes.skills}>
      <PageHeader title={"What about the skills?"} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        neque quos doloremque modi est ipsam magnam dolorem totam. Quaerat
        similique dolorem dolorum, doloremque ullam quae odio obcaecati error
        aliquid quod.
      </p>
      <div className={classes.container}>
        {totalSkills.map((skill) => {
          return <div className={classes.list}>{skill}</div>;
        })}
      </div>
    </div>
  );
};
export default Skills;
