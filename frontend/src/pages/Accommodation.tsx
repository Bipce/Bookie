import { useEffect, useState } from "react";
import { IAccommodations } from "../models/accommodations";
import { Link, useParams } from "react-router-dom";
import { getAccommodation } from "../services/backend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Detail.css";

const Accommodation = () => {
  const [accommodation, setAccommodation] = useState<IAccommodations>();

  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  useEffect(() => {
    (async () => {
      setAccommodation(await getAccommodation(id));
    })();
  }, []);

  if (!accommodation) return null;

  return (
    <section className="detail--section margin-wrapper" id="accommodations">
      <h2 className="detail--section__title fz22">{accommodation.name}</h2>

      <article className="detail--box common--articles--box__article">
        <Link to={`http://localhost:3000/images/accommodations/${accommodation.photo}`} className="detail--box__link">
          <img
            src={`http://localhost:3000/images/accommodations/${accommodation.photo}`}
            alt={accommodation.name}
            className="detail--box__img"
          />
        </Link>

        <div className="detail--box__content fz16">
          <div>
            <p className="detail--box__content--price">
              Nuit à partir de {accommodation.price} <strong>€</strong>
            </p>
            <div className="detail--box__content--note common--article--box__note">
              {[...Array(accommodation.note)].map((_, i) => (
                <FontAwesomeIcon icon={faStar} style={{ color: "#0065fc" }} key={i}></FontAwesomeIcon>
              ))}
              {[...Array(5 - accommodation.note)].map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} />
              ))}
            </div>
          </div>

          <button className="detail--box__btn fz22">Réserver</button>
        </div>
      </article>
    </section>
  );
};

export default Accommodation;
