import "./Header.scss"
import moon from "../../assets/images/moon.svg"

const Header=()=>{
  return(
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <strong className="header__text">Where in the world?</strong>
          <button className="header__btn"><img src={moon} alt="moon" className="moonImg" /> <span className="btnText">Dark Mode</span></button>
        </div>
      </div>
    </header>
  )
}

export default Header