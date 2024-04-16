import { useNavigate } from "react-router-dom";
import registerStyles from "./register.module.css";

export default function Register() {
  const navigate = useNavigate();
  return (
    <section className={registerStyles.registerSection}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 className={registerStyles.register}>Register</h2>
        <button type="button" className={registerStyles.registerWithGoogleBtn}>
          Sign up with Google
        </button>
        <hr
          className={registerStyles.registerDivider}
          data-content="or register with email"
        />
        <form action="" className={registerStyles.form}>
          <div className={registerStyles.nameAndUserNameContainer}>
            <fieldset className={registerStyles.fieldset}>
              <label htmlFor="name" className={registerStyles.nameLabel}>
                Name
              </label>
              <input
                type="text"
                name="name"
                className={registerStyles.nameInputBox}
              />
            </fieldset>
            <fieldset className={registerStyles.fieldset}>
              <label
                htmlFor="username"
                className={registerStyles.userNameLabel}
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                className={registerStyles.userNameInputBox}
              />
            </fieldset>
          </div>
          <label className={registerStyles.label}>Email</label>
          <input type="email" className={registerStyles.registerPageInputBox} />
          <label className={registerStyles.label}>Password</label>
          <input
            type="password"
            name=""
            className={registerStyles.registerPageInputBox}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label className={registerStyles.label}>
              <input type="checkbox" name="" id="" />
              Remember Me
            </label>
            <a href="" className={registerStyles.a}>
              Forgot?
            </a>
          </div>
          <button
            className={registerStyles.registerButton}
            onClick={() => navigate("/player")}
          >
            Register
          </button>
        </form>
        <p id={registerStyles.signInRedirectButton}>Already have an account?</p>
        <a href="" id={registerStyles.signInRedirectLink}>
          Login
        </a>
      </div>
    </section>
  );
}
