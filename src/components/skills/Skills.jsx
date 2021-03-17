import React from "react";
import PageHeader from "../pageHeader/PageHeader";
import classes from "./Skills.module.css";
import codeThinking from "../../images/undraw_Code_thinking_re_gka2.svg";

const Skills = () => {
  const listTitleStyle = {
    fontWeight: 900,
    color: "#9B1FE8",
    marginBottom: "4px",
  };
  const frontEndSkills = (
    <ul>
      <li style={listTitleStyle}>FRONTEND</li>
      <li>ReactJs - Redux - HTML5 - CSS3</li>
    </ul>
  );
  const backEndSkills = (
    <ul>
      <li style={listTitleStyle}>BACKEND</li>
      <li>Java - NodeJS - SQL - MongoDB</li>
      <li>Spring Boot - Express - REST</li>
    </ul>
  );

  const otherSkills = (
    <ul>
      <li style={listTitleStyle}>OTHER</li>
      <li>Git - JSON - XML</li>
    </ul>
  );
  const testFrontEndSkills = (
    <ul>
      <li style={listTitleStyle}>FRONTEND</li>
      <li>ReactJs - Redux - HTML5 - CSS3</li>
    </ul>
  );
  const testBackEndSkills = (
    <ul>
      <li style={listTitleStyle}>BACKEND</li>
      <li>Java - NodeJS - SQL - MongoDB</li>
      <li>Spring Boot - Express - REST</li>
    </ul>
  );

  const testOtherSkills = (
    <ul>
      <li style={listTitleStyle}>OTHER</li>
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
        <img src={codeThinking} alt="code thinking" />
        {totalSkills.map((skill) => {
          return <div className={classes.list}>{skill}</div>;
        })}
      </div>
    </div>
  );
};
export default Skills;
