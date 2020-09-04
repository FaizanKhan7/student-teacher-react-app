import React from "react";
import styles from "./student.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const initialState = {
  name: "",
  rollNo: "",
  class: "",
  section: "",
  nameError: "",
  rollNoError: "",
  classError: "",
  sectionError: "",
};
class Student extends React.Component {
  state = {
    initialState,
    tFeildDetails: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    if (!localStorage.getItem("student_data")) {
      localStorage.setItem("student_data", JSON.stringify({ studentDate: [] }));
    }

    let tDetials = JSON.parse(localStorage.getItem("student_data"));
    this.setState({
      tFeildDetails: tDetials ? tDetials.studentDate : [],
    });
  }
  handleRemove = (id) => {
    let filterstudentDetails = this.state.tFeildDetails.filter(
      (student) => student.id !== id
    );
    console.log(this.state.filterstudentDetails);
    this.setState({
      tFeildDetails: filterstudentDetails,
    });
  };
  validate = () => {
    let nameError = "";
    let rollNoError = "";
    let classError = "";
    let sectionError = "";

    if (!this.state.name) {
      nameError = "Name cannot be empty";
    }
    if (!this.state.rollNo) {
      rollNoError = "Please insert your Roll No:";
    }
    if (!this.state.class) {
      classError = "Please select your class";
    }
    if (!this.state.section) {
      sectionError = "Please select your class section";
    }

    if (nameError || rollNoError || classError || sectionError) {
      this.setState({
        nameError,
        rollNoError,
        classError,
        sectionError,
      });
      return false;
    }

    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const student = {
        name: this.state.name,
        studentId: this.state.tFeildDetails.length,
        class: this.state.class,
        section: this.state.section,
      };
      this.setState({
        tFeildDetails: [...this.state.tFeildDetails, student],
      });
      console.log(this.state);
      // clear the form
      this.setState(initialState);
    }
  };
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
          <form onSubmit={this.handleSubmit}>
            <div className={styles.formLayout}>
              <label>Name </label>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div className={styles.errors}>{this.state.nameError}</div>
            </div>
            <div className={styles.formLayout}>
              <label>Roll No.</label>
              <Input
                type="number"
                placeholder="Ex: 1,2,3..."
                name="rollNo"
                value={this.state.rollNo}
                onChange={this.handleChange}
              />
              <div className={styles.errors}>{this.state.rollNoError}</div>
            </div>

            <div className={styles.formLayout}>
              <label>Class</label>
              <select
                value={this.state.class}
                name="class"
                onChange={this.handleChange}
              >
                <option>Select Class</option>
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
              <div className={styles.errors}>{this.state.classError}</div>
            </div>
            <div className={styles.formLayout}>
              <label>Section</label>
              <select
                value={this.state.section}
                name="section"
                onChange={this.handleChange}
              >
                <option>Select Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
              </select>
              <div className={styles.errors}>{this.state.sectionError}</div>
            </div>
            <Button btnName="Submit" type="submit" />
          </form>
        </div>
        <table className={styles.studentDetails}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class & Sec</th>
              <th>
                <i className={"far fa-edit"}></i>/
                <i className={"fas fa-trash-alt"}></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.tFeildDetails &&
              this.state.tFeildDetails.map((student, id) => (
                <tr key={id}>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>
                    {student.class} & {student.section}
                  </td>
                  <td>
                    <i
                      className={"fas fa-trash-alt"}
                      onClick={() => this.handleRemove(student.id)}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;
