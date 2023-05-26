import logo from "../../assets/logo/Booki.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logo} alt="logo" className="logo" />
      </h1>
    </header>
  );
};

export default Header;
