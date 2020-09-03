import React from "react";
import styles from "./home.module.css";
import Button from "./components/Button/Button";

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.homePage}>
        <img
          className={styles.homeBanner}
          src={require("./shared/assets/home-banner.png")}
          alt="illustration_of_a_presentation"
        />
        <Button btnName={"Student"} />
        <Button btnName={"teacher"} />
      </div>
    );
  }
}
