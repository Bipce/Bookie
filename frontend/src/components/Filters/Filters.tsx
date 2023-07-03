import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faMoneyBillWave,
  faPerson,
  faHeart,
  faFire,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./Filters.css";
import { useEffect, useState } from "react";

const Filters = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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
    <div className="margin-wrapper">
      <div className="filters-container marbot35">
        <h2 className="fz22">Trouvez votre hébergement pour des vacances de rêve</h2>
        <h3 className="catchphrase fz16 marbot35">En plein centre-ville ou en pleine nature</h3>

        <nav className="navbar marbot35">
          <FontAwesomeIcon icon={faLocationDot} className="map-icon bck-color-secondary" />
          <form>
            <label htmlFor="searchBar"></label>
            <input type="text" name="searchBar" id="searchBar" placeholder="Ville, Pays" className="searchBar fz18" />
          </form>
          <button>
            {windowSize < 1024 ? (
              <FontAwesomeIcon icon={faMagnifyingGlass} className="loop-icon" />
            ) : (
              <p className="fz18 loop-icon searchWord">Rechercher</p>
            )}
          </button>
        </nav>

        <div className="filtersBox">
          <h2 className="fz18 filters-title">Filtres</h2>

          <ul className="filters marbot35">
            <li className="filter">
              <FontAwesomeIcon icon={faMoneyBillWave} className="color-primary" /> Économique
            </li>
            <li className="filter">
              <FontAwesomeIcon icon={faPerson} className="color-primary" /> Familial
            </li>
            <li className="filter">
              <FontAwesomeIcon icon={faHeart} className="color-primary" /> Romantique
            </li>
            <li className="filter">
              <FontAwesomeIcon icon={faFire} className="color-primary" /> Nos Pépites
            </li>
          </ul>
        </div>

        <p className="info fz16">
          <FontAwesomeIcon icon={faInfo} />
          Plus de 500 logements sont disponible dans cette ville
        </p>
      </div>
    </div>
  );
};

export default Filters;
