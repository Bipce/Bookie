import { useEffect, useState } from "react";
import { IAccommodation } from "../../models/accommodations";
import { Link, useParams } from "react-router-dom";
import { getAccommodation } from "../../services/backend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Accommodation.css";

const Accommodation = () => {
  const [accommodation, setAccommodation] = useState<IAccommodation>();

  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  useEffect(() => {
    (async () => {
      setAccommodation(await getAccommodation(id));
    })();
  }, []);

  if (!accommodation) return null;

  return (
    <section className="accommodation--section margin-wrapper ">
      <h2 className="accommodation--section__title fz22">{accommodation.name}</h2>

      <article className="accommodation--box common--articles--box__article">
        <Link
          to={`http://localhost:3000/images/accommodations/${accommodation.photo}`}
          className="accommodation--box__link"
        >
          <img
            src={`http://localhost:3000/images/accommodations/${accommodation.photo}`}
            alt={accommodation.name}
            className="accommodation--box__img"
          />
        </Link>

        <div className="accommodation--box__content fz16">
          <div>
            <p className="accommodation--box__content--price">
              Nuit à partir de {accommodation.price} <strong>€</strong>
            </p>
            <div className="accommodation--box__content--note common--article--box__note">
              {[...Array(accommodation.note)].map((_, i) => (
                <FontAwesomeIcon icon={faStar} style={{ color: "#0065fc" }} key={i}></FontAwesomeIcon>
              ))}
              {[...Array(5 - accommodation.note)].map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} />
              ))}
            </div>
          </div>

          <button className="accommodation--box__btn fz22">Réserver</button>
        </div>
      </article>
    </section>
  );
};

export default Accommodation;
