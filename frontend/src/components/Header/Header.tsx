import { Link } from "react-router-dom";
import logo from "../../assets/logo/Booki.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">
        <img src={logo} alt="logo" className="logo" />
      </h1>

      <ul className="fz16 anchors">
        <li className="anchor">
          <Link to="/">Hébergements</Link>
        </li>
        <li className="anchor">
          <Link to="/">Activités</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
