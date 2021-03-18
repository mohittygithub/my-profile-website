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
    "Java Brains - Kaushik runs this channel. He is one of the best Java experts I discovered on youtube. He has deep knowledge of every aspect of Java and he explains everything thorougly. If anyone is looking forward to make his career in web development using Java (Spring Boot) this channel is one stop shop.";
  const codeEvolutionDesc =
    "Code Evolution - Vishwas runs this channel. Again I would give him kudos for his tutorial on React JS. He is best at what he is doing. I learned React JS from his tutorials and I would say, it was so easy while learning with Vishwas's tutorials. Guys he can make you a React expert in no time.";
  const freeCodeCampDesc =
    "This is another favorite of mine. You can find any kind of tutorial here according to your needs. A must to be followed channel on youtube";

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
    <div className={classes.youtube} id="youtube">
      <PageHeader title={"Youtubers I follow."} />
      <div className={classes.youtubeContent}>
        <div className={classes.paragraph}>
          <p>
            These are some youtube channels I follow regularly to sharpen my
            programming skills. These channels helped me a lot to stand up again
            on my feet when I started my developer career again after a long
            gap. Sharing them so more people would get help from them.
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
