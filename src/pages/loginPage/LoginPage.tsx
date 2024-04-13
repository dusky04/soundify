import "./loginpage.css";
import image from "../../assets/login_page1.jpg";
import video from "../../assets/login_page_video.mp4";

export default function LoginPage() {
  return (
    <main>
      <></>
      <p id="sounding">sounding</p>
      {/* <img src={image} alt="" className="login-page-sidebar-image" /> */}
      <video
        loop
        src={video}
        className="login-page-sidebar-video"
        autoPlay
        playsInline
        muted
        typeof="video/mp4"
      ></video>
      <section className="login-page-content">
        <h2 className="login">Login</h2>
        <button type="button" className="login-with-google-btn">
          Sign in with Google
        </button>
        {/* <div className="or-div"> */}
        <hr className="hr-text" data-content="or login with email" />
        {/* or log in with email */}
        {/* <hr /> */}
        {/* </div> */}
        {/* <p>Let the Music Move You</p> */}
        <form action="">
          <label>Email</label>
          <input type="email" className="login-page-input-box" />
          <label>Password</label>
          <input type="password" name="" className="login-page-input-box" />
          {/* <div> */}
          <label>
            <input type="checkbox" name="" id="" />
            Remember Me
          </label>
          <a href="">Forgot?</a>
          {/* </div> */}
          <button className="login-button">Login</button>
        </form>
        <p id="sign-up-redirect-button">
          Don't have an account?
          <a href="" id="">
            Sign Up
          </a>
        </p>
      </section>
    </main>
  );
}
