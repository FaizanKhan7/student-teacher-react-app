import React from "react";
import styles from "./teacher.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

class Teacher extends React.Component {
  render() {
    return (
      <div className={styles.teacherPage}>
        <h1>teacher</h1>
        <div className={styles.teacherStyles}>
          <img
            className={styles.teacherBanner}
            src={require("../../shared/assets/teacher-teaching.jpg")}
            alt="Students_illustration"
          />
          <form>
            <div className={styles.formLayout}>
              <label>Name </label>
              <Input type="text" />
            </div>
            <div className={styles.formLayout}>
              <label>Teacher ID</label>
              <Input type="text" />
            </div>
            <div className={styles.formLayout}>
              <label>Class</label>
              <select multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div className={styles.formLayout}>
              <label>Section</label>
              <select multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
              </select>
            </div>
            <Button btnName="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Teacher;
