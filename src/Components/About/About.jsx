import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();

  const img =
    width < 650
      // ? "./profile-pic.png"    // my Picture
      ? "https://media.licdn.com/dms/image/D4D03AQHlMhzWP66F8Q/profile-displayphoto-shrink_400_400/0/1694337341317?e=1706140800&v=beta&t=0dvxf7ZFL92SfnhIlvG5bHqwuvP_KR6WBmLmPxuVpxo"
      : "https://www.damiestechnologies.com/img/programmer.gif";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={"https://www.damiestechnologies.com/img/programmer.gif"}
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hi there! I'm Kalash Band, passionate about crafting captivating experiences on the web.
          <br /> Over time, I've developed numerous web applications, mastering not only technical
          skills but also the art of collaboration, leadership, and effective communication.
          After dedicated months of learning, I'm here, ready to bring innovation and creativity to the digital realm.
          <span style={{ color: `#00a0a0` }}>
            {" "}
            I'm excited to embark on a career as a Web Developer, eager to contribute and learn in a fresher role.
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
