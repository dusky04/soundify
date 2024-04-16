import loginPageStyles from "./login-page.module.css";
import video from "../../assets/login_page_video.mp4";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";

export default function LoginPage(): JSX.Element {
  return (
    <main className={loginPageStyles.LoginPage}>
      <p id={loginPageStyles.sounding}>sounding</p>
      <p id={loginPageStyles.tagLine}>Let the Music Move You</p>
      <video
        loop
        src={video}
        className={loginPageStyles.loginPageSidebarVideo}
        autoPlay
        playsInline
        muted
        typeof="video/mp4"
      ></video>

      <section className={loginPageStyles.loginPageContent}>
        <Register />
        {/* <Login /> */}
      </section>
    </main>
  );
}
