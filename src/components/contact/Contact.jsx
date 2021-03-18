import React from "react";
import classes from "./Contact.module.css";
import {
  FaYoutube,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.contactIcons}>
        <FaYoutube
          color="white"
          size="70px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://www.youtube.com/")}
        />
        <FaInstagramSquare
          color="white"
          size="70px"
          style={{ padding: "1%" }}
          onClick={handleURL("#")}
        />
        <FaGithub
          color="white"
          size="70px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://github.com/mohittygithub")}
        />
        <FaLinkedin
          color="white"
          size="70px"
          style={{ padding: "1%" }}
          onClick={handleURL("#")}
        />
      </div>
      <div className={classes.email}>
        <h3>mtyagi.dev@gmail.com</h3>
      </div>
    </div>
  );
};
export default Contact;
