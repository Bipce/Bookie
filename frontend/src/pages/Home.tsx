import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faMoneyBillWave,
  faPerson,
  faHeart,
  faFire,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <ul>
        <li>Hébergements</li>
        <li>Activités</li>
      </ul>

      <h2>Trouvez votre hébergement pour des vacances de rêve</h2>
      <h3>En plein centre-ville ou en pleine nature</h3>

      <nav>
        <FontAwesomeIcon icon={faLocationDot} />
        <form>
          <label htmlFor="searchBar"></label>
          <input type="text" name="searchBar" id="searchBar" placeholder="Ville, Pays" />
        </form>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </nav>

      <div className="filter">
        <ul>
          <li>
            <FontAwesomeIcon icon={faMoneyBillWave} /> Économique
          </li>
          <li>
            <FontAwesomeIcon icon={faPerson} /> Familial
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} /> Romantique
          </li>
          <li>
            <FontAwesomeIcon icon={faFire} /> Nos Pépites
          </li>
        </ul>
      </div>

      <p>
        <FontAwesomeIcon icon={faCircleInfo} />
        Plus de 500 logements sont disponible dans cette ville
      </p>
    </>
  );
};

export default Home;
