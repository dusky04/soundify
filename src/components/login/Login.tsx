import { useNavigate } from "react-router-dom";
import loginStyles from "./login.module.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <section className={loginStyles.loginSection}>
      <h2 className={loginStyles.login}>Login</h2>
      <button type="button" className={loginStyles.loginWithGoogleBtn}>
        Sign in with Google
      </button>
      <hr
        className={loginStyles.loginDivider}
        data-content="or login with email"
      />
      <form action="" className={loginStyles.form}>
        <label className={loginStyles.label}>Email</label>
        <input type="email" className={loginStyles.loginPageInputBox} />
        <label className={loginStyles.label}>Password</label>
        <input
          type="password"
          name=""
          className={loginStyles.loginPageInputBox}
        />
        <label className={loginStyles.label}>
          <input type="checkbox" name="" id="" />
          Remember Me
        </label>
        <a href="" className={loginStyles.a}>
          Forgot?
        </a>
        <button
          className={loginStyles.loginButton}
          onClick={() => navigate("/player")}
        >
          Login
        </button>
      </form>
      <p id={loginStyles.signUpRedirectButton}>Don't have an account?</p>
      <a href="" id={loginStyles.signUpRedirectLink}>
        Sign Up
      </a>
    </section>
  );
}
