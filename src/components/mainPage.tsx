import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../css/mainPage.css";
import LoginForm from "./login";
import SignUpForm from "./signup";

const MainPage = () => {
  const [form, setForm] = useState("login");

  const displayForm = useSelector((state: any) => {
    console.log(state);
    return state.form.formDisplay;
  });

  

  return (
    <div className="main-div">
      <div className="main-page">
        <div className="main-form">
          {displayForm === "LOGIN_FORM" ? <LoginForm /> : <SignUpForm />}
        </div>
        <img
          className="image-div"
          src="https://applian.com/img/login.svg"
          alt="some img"
        ></img>
        {/* <h1>discuter</h1>
      <br />
      <h2>It helps you connect and share with the people in your life.</h2> */}
      </div>
    </div>
  );
};

export default MainPage;
