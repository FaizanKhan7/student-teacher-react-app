import React from "react";
import styles from "./teacher.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const initialState = {
  name: "",
  teacherId: "",
  class: "",
  section: "",
  nameError: "",
  teacherIdError: "",
  classError: "",
  sectionError: "",
};
class Teacher extends React.Component {
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
    if (!localStorage.getItem("teacher_data")) {
      localStorage.setItem("teacher_data", JSON.stringify({ teacherDate: [] }));
    }

    let tDetials = JSON.parse(localStorage.getItem("teacher_data"));
    this.setState({
      tFeildDetails: tDetials ? tDetials.teacherDate : [],
    });
    // let tFeildDetails = [];
    // let tDetials = JSON.parse(localStorage.getItem("teacher_data"));
    // tDetials = tDetials ? tDetials : [];

    // for (
    //   let i = 0;
    //   i <
    //   (tDetials &&
    //     tDetials.existingTeacherData &&
    //     tDetials.existingTeacherData.length);
    //   i++
    // ) {
    //   let teacherDate = {
    //     teacherInfo: tDetials.existingTeacherData[i],
    //   };
    //   tFeildDetails.push(teacherDate);
    // }

    // this.setState({
    //   tFeildDetails,
    // });
  }

  handleRemove = (id) => {
    let filterTeacherDetails = this.state.tFeildDetails.filter(
      (teacher) => teacher.id !== id
    );
    console.log(this.state.filterTeacherDetails);
    this.setState({
      tFeildDetails: filterTeacherDetails,
    });
  };

  validate = () => {
    let nameError = "";
    let teacherIdError = "";
    let classError = "";
    let sectionError = "";

    if (!this.state.name) {
      nameError = "Name cannot be empty";
    }
    if (!this.state.teacherId) {
      teacherIdError = "Please insert your ID";
    }
    if (!this.state.class) {
      classError = "Please select your class or classes";
    }
    if (!this.state.section) {
      sectionError = "Please select your class section or sections";
    }

    if (nameError || teacherIdError || classError || sectionError) {
      this.setState({
        nameError,
        teacherIdError,
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
      const teacher = {
        name: this.state.name,
        teacherId: this.state.tFeildDetails.length,
        class: this.state.class,
        section: this.state.section,
      };
      this.setState({
        tFeildDetails: [...this.state.tFeildDetails, teacher],
      });
      // let existingTeacherData = localStorage.getItem("teacher_data");
      // existingTeacherData = JSON.parse(existingTeacherData);
      // existingTeacherData.teacherDate.push({
      //   ...this.state,
      //   ...{ id: existingTeacherData.teacherDate.length + 1 },
      // });
      // localStorage.setItem("teacher_data", JSON.stringify(existingTeacherData));

      console.log(this.state);
      // clear the form
      this.setState(initialState);
    }
  };
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
              <label>Teacher ID</label>
              <Input
                type="text"
                placeholder="Teacher ID"
                name="teacherId"
                value={this.state.teacherId}
                onChange={this.handleChange}
              />
              <div className={styles.errors}>{this.state.teacherIdError}</div>
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

        <table className={styles.teacherDetails}>
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
              this.state.tFeildDetails.map((teacher, id) => (
                <tr key={id}>
                  <td>{teacher.teacherId}</td>
                  <td>{teacher.name}</td>
                  <td>
                    {teacher.class} & {teacher.section}
                  </td>
                  <td>
                    <i
                      className={"fas fa-trash-alt"}
                      onClick={() => this.handleRemove(teacher.id)}
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

export default Teacher;
