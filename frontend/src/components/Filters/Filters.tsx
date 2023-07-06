import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faPerson, faHeart, faFire, faInfo } from "@fortawesome/free-solid-svg-icons";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters--box margin-wrapper marbot35">
      <h2 className="fz18 filters--box__title">Filtres</h2>

      <ul className="filters--box__liste marbot35">
        <li className="filters--box__liste--filter">
          <FontAwesomeIcon icon={faMoneyBillWave} className="color-primary" /> Économique
        </li>
        <li className="filters--box__liste--filter">
          <FontAwesomeIcon icon={faPerson} className="color-primary" /> Familial
        </li>
        <li className="filters--box__liste--filter">
          <FontAwesomeIcon icon={faHeart} className="color-primary" /> Romantique
        </li>
        <li className="filters--box__liste--filter">
          <FontAwesomeIcon icon={faFire} className="color-primary" /> Nos Pépites
        </li>
      </ul>

      <p className="subtext fz16">
        <FontAwesomeIcon icon={faInfo} />
        Plus de 500 logements sont disponible dans cette ville
      </p>
    </div>
  );
};

export default Filters;
