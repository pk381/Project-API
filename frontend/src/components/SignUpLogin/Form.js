import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const SignUpForm = (props) => {
  // State variables to hold user input
  const [formType, setFormType] = useState("LOGIN");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // Function to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    if (formType === "LOGIN") {
      try {
        let formData = {
          email: email,
          password: password,
        };

        let result = await axios.post(
          "http://localhost:4000/user/login",
          formData
        );
        console.log(result);
      } catch (err) {
        console.log(err, "Error in Login");
      }
    } else {
      if (password === cPassword) {
        try {
          let formData = {
            fullName: fullName,
            email: email,
            password: password,
          };
          let result = await axios.post(
            "http://localhost:4000/user/sign_up",
            formData
          );
          console.log(result);
        } catch (err) {
          console.log(err, "Error in Sign Up");
        }
      } else {
        console.log("Password is not matching");
      }
    }
  };

  const forgotPasswordHandler = () => {
    console.log("forgot password");
  };

  return (
    <div>
      <form>
        <div className={props.showForm ? styles.active + " " + styles.container : styles.container}>
          <div className={styles.header}>
            <div className={styles.text}>{formType}</div>
          </div>

          <div className={styles.inputs}>
            {formType === 'SIGN UP' ? <div className={styles.input}>
              <input
                type="text"
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div> : ''}

            <div className={styles.input}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <input
                type="password"
                placeholder="Password"
                autoComplete="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {formType === "LOGIN" ? (
              <div></div>
            ) : (
              <div className={styles.input}>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="true"
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className={styles["forgot-password"]}>
            <p>
              Forgot password?{" "}
              <span onClick={forgotPasswordHandler}>Click here</span>
            </p>
          </div>
          <div className={styles["submit-container"]}>
            <div className={styles.submit} onClick={submitHandler}>
              {formType}
            </div>
          </div>

          <div className={styles["sub-container"]}></div>

          {formType === "LOGIN" ? (
            <div className={styles["create-account"]}>
              <p>
                No Account?{" "}
                <span onClick={() => setFormType("SIGN UP")}>Create One</span>
              </p>
            </div>
          ) : (
            <div className={styles["create-account"]}>
              <p>
                Already have Account?{" "}
                <span onClick={() => setFormType("LOGIN")}>Login</span>
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;