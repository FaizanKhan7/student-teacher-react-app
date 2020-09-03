import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styles from "./home.module.css";
import Button from "./components/Button/Button";
import studentRoutes from "./student/studentRoutes/Student";
import teacherRoutes from "./teacher/teacherRoutes/teacher";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.homePage}>
        <img
          className={styles.homeBanner}
          src={require("./shared/assets/home-banner.png")}
          alt="illustration_of_a_presentation"
        />
        <Link to="/student">
          <Button btnName={"Student"} />
        </Link>
        <Link to="/teacher">
          <Button btnName={"teacher"} />
        </Link>
      </div>
    );
  }
}

export default function HomeRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/student" component={studentRoutes} />
      <Route path="/teacher" component={teacherRoutes} />
    </Switch>
  );
}
