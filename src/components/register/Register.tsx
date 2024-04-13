import { useNavigate } from "react-router-dom";
import registerStyles from "./register.module.css";

export default function Register() {
  const navigate = useNavigate();
  return (
    <section className={registerStyles.registerSection}>
      <h2 className={registerStyles.register}>Register</h2>
      <button type="button" className={registerStyles.registerWithGoogleBtn}>
        Sign up with Google
      </button>
      <hr
        className={registerStyles.registerDivider}
        data-content="or register with email"
      />
      <form action="" className={registerStyles.form}>
        <div>
          <label htmlFor="name" className={registerStyles.nameLabel}>
            Name
          </label>
          <label htmlFor="username" className={registerStyles.userNameLabel}>
            Username
          </label>
          <input
            type="text"
            style={{ width: "30%" }}
            name="name"
            className={registerStyles.nameInputBox}
          />
          <input
            type="text"
            style={{ width: "30%" }}
            name="username"
            className={registerStyles.userNameInputBox}
          />
        </div>
        <label className={registerStyles.label}>Email</label>
        <input type="email" className={registerStyles.registerPageInputBox} />
        <label className={registerStyles.label}>Password</label>
        <input
          type="password"
          name=""
          className={registerStyles.registerPageInputBox}
        />
        <label className={registerStyles.label}>
          <input type="checkbox" name="" id="" />
          Remember Me
        </label>
        <a href="" className={registerStyles.a}>
          Forgot?
        </a>
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
    </section>
  );
}
