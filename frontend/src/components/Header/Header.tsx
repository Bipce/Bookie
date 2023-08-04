import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo/Booki.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header--box">
        <Link to="/">
          <h1 className="header--box__title">
            <img src={logo} alt="logo" className="header--box__logo" />
          </h1>
        </Link>

        <ul className="fz16 header--box__anchors">
          <li className="header--box__anchors--anchor">
            <HashLink to="/#accommodations--section">Hébergements</HashLink>
          </li>
          <li className="header--box__anchors--anchor">
            <HashLink to="/">Activités</HashLink>
          </li>
        </ul>
      </div>

      <div className="subtitle--box">
        <h2 className="fz22">Trouvez votre hébergement pour des vacances de rêve</h2>
        <h3 className="subtitle--box__third--title fz16 ">En plein centre-ville ou en pleine nature</h3>
      </div>
    </header>
  );
};

export default Header;
