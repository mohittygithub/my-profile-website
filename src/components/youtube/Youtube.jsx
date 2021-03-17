import React from "react";
import classes from "./Youtube.module.css";
import PageHeader from "../pageHeader/PageHeader";
import javaBrains from "../../images/javaBrains.jpg";
import codeEvolution from "../../images/codeEvolution.jpg";
import freeCodeCamp from "../../images/freeCodeCamp.jpg";
import youtubeIcon from "../../images/youtube.png";

const Youtube = () => {
  const javaBrainsUrl = "https://www.youtube.com/user/koushks";
  const codeEvolutionUrl =
    "https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw";
  const freeCodeCampUrl =
    "https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw";
  const javaBrainsDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis nihil odio facilis obcaecati blanditiis explicabo incidunt odit vel exercitationem, natus consequuntur eius, rerum excepturi quo aliquam nesciunt? Similique, explicabo?";
  const codeEvolutionDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis nihil odio facilis obcaecati blanditiis explicabo incidunt odit vel exercitationem, natus consequuntur eius, rerum excepturi quo aliquam nesciunt? Similique, explicabo?";
  const freeCodeCampDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis nihil odio facilis obcaecati blanditiis explicabo incidunt odit vel exercitationem, natus consequuntur eius, rerum excepturi quo aliquam nesciunt? Similique, explicabo?";

  const playButton = (url) => {
    return (
      <div
        className={classes.playButton}
        onClick={(e) => window.open(url, "_blank").focus}
      >
        <img
          className={classes.playButtonIcon}
          src={youtubeIcon}
          alt="youtubeIcon"
        />
      </div>
    );
  };

  const youtubeVideo = (url, thumbnail, description) => {
    return (
      <div className={classes.videoContainer}>
        <div className={classes.thumbnail}>
          {playButton(url)}
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <div className={classes.text}>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={classes.youtube}>
      <PageHeader title={"Youtubers I follow."} />
      <div className={classes.youtubeContent}>
        <div className={classes.paragraph}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            autem nostrum dolorum eveniet eaque, earum a laudantium minus!
            Consequuntur modi facere iusto cum quisquam eveniet nam tempore
            dolorem minima itaque!
          </p>
        </div>
        <div className={classes.videos}>
          {youtubeVideo(javaBrainsUrl, javaBrains, javaBrainsDesc)}
          {youtubeVideo(codeEvolutionUrl, codeEvolution, codeEvolutionDesc)}
          {youtubeVideo(freeCodeCampUrl, freeCodeCamp, freeCodeCampDesc)}
        </div>
      </div>
    </div>
  );
};
export default Youtube;
