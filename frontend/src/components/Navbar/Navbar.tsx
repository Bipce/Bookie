import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const WINDOW_BREAKPOINT = 768;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="navbar--box margin-wrapper marbot35">
      <FontAwesomeIcon icon={faLocationDot} className="navbar--box__map--icon bck-color-secondary" />
      <form>
        <label htmlFor="searchBar"></label>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Ville, Pays"
          className="navbar--box__searchBar fz18"
        />
      </form>
      <button>
        {windowSize < WINDOW_BREAKPOINT ? (
          <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar--box__loop-icon" />
        ) : (
          <p className="fz18 navbar--box__loop-icon navbar--box__searchWord">Rechercher</p>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
