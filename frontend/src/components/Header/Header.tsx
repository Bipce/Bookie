import { Link } from "react-router-dom";
import logo from "../../assets/logo/Booki.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header txt-center">
      <h1 className="title">
        <img src={logo} alt="logo" className="logo" />
      </h1>

      <ul className="fz16 anchors">
        <li className="anchor color-primary">
          <Link to="/" className="color-primary">
            Hébergements
          </Link>
        </li>
        <li className="anchor color-primary">
          <Link to="/" className="color-primary">
            Activités
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
