import React from "react";
import styles from "./button.module.css";

export default class Button extends React.Component {
  render() {
    return (
      <>
        <button
          className={styles.btnStyle}
          type={this.props.type}
          onSubmit={this.props.onSubmit}
        >
          {this.props.btnName}
        </button>
      </>
    );
  }
}
