import "./Header.scss";
import moon from "../../assets/images/moon.png";
import sun from "../../assets/images/sun.png";
import { useState } from "react";

const Header = ({ theme, setTheme }) => {
  const [bool, setBool] = useState(window.localStorage.getItem("bool") || false);

  window.localStorage.setItem("bool", !bool);

  setTheme(bool ? "light" : "dark");

  return (
    <header className={theme}>
      <div className="container">
        <div className="header__inner">
          <strong className="header__text">Where in the world?</strong>
          <button
            onClick={() => {
              setBool(!bool);
              console.log(localStorage.getItem("bool"));
            }}
            className="header__btn"
          >
            {bool ? (
              <>
                <img src={moon} alt="moon" className="moonImg" />
                <span className="btnText">Dark Mode</span>
              </>
            ) : (
              <>
                <img src={sun} alt="moon" className="moonImg" />
                <span className="btnText">Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
