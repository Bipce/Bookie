import { Link } from "react-router-dom";
import logo from "../../assets/logo/Booki.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={logo} alt="logo" className="logo" />
      </h1>

      <ul className="fz16 anchor">
        <li className="color-primary">
          <Link to="/" className="color-primary">
            Hébergements
          </Link>
        </li>
        <li className="color-primary">
          <Link to="/" className="color-primary">
            Activités
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
