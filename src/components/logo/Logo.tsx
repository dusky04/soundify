import BackForwardButtons from "../backforwardbuttons/BackForwardButtons";
import "./logo.css";

export default function Logo() {
  return (
    <div className="logoPlusBackButtons">
      <div className="logoWrapper">
        <p id="soundifyLogo">soundify</p>
        <div className="logoSideInfo">
          <p>
            All rights Reserved <sup>&copy;</sup>
          </p>
          <p>powered through you </p>
        </div>
      </div>
      <BackForwardButtons />
    </div>
  );
}
