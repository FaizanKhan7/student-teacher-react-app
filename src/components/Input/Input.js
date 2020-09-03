import React from "react";
import styles from "./input.module.css";

export default class Input extends React.Component {
  render() {
    return (
      <div className={styles.inputFeild}>
        <input type={this.props.type} />
      </div>
    );
  }
}
