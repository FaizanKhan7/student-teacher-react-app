import React from "react";
import styles from "./input.module.css";

export default class Input extends React.Component {
  render() {
    return (
      <div className={styles.inputFeild}>
        <input
          className={styles.inputStyles}
          type={this.props.type}
          value={this.props.value}
          name={this.props.name}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
