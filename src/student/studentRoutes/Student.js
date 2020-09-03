import React from "react";
import styles from "./student.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
class Student extends React.Component {
  render() {
    return (
      <div className={styles.studentPage}>
        <h1>student</h1>
        <div className={styles.studentStyles}>
          <img
            className={styles.studentBanner}
            src={require("../../shared/assets/students.jpg")}
            alt="Students_illustration"
          />
          <form>
            <div className={styles.formLayout}>
              <label>Name </label>
              <Input type="text" />
            </div>
            <div className={styles.formLayout}>
              <label>Roll No.</label>
              <Input type="number" />
            </div>
            <div className={styles.formLayout}>
              <label>Class</label>
              <select>
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
              <select>
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

export default Student;
