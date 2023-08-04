import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getAccommodations } from "../../services/backend";
import { IAccommodations } from "../../models/accommodations";
import "./Accommodations.css";
import "../Common.css";

const Accommodations = () => {
  const [accommodations, setAccommodations] = useState<IAccommodations[]>();

  useEffect(() => {
    (async () => {
      setAccommodations(await getAccommodations(false));
    })();
  }, []);

  return (
    <section className="accommodations--section common flex-column">
      <div>
        <h2 className="fz22">Hébergements à Marseille</h2>
      </div>

      <div className="accommodations--box common--articles--box">
        {accommodations?.map(accommodations => {
          return (
            <Link to={`/accommodation/${accommodations._id}`} key={accommodations._id}>
              <article className="accommodations--box__article common--articles--box__article flex-column">
                <img
                  src={`http://localhost:3000/images/accommodations/${accommodations.photo}`}
                  alt={accommodations.name}
                  className="accommodations--box__article--img"
                />

                <div className="accommodations--box__content flex-column">
                  <h2 className="fz16">{accommodations.name}</h2>
                  <p>
                    Nuit à partir de {accommodations.price}
                    <strong>€</strong>
                  </p>
                  <div className="common--article--box__note">
                    {[...Array(accommodations.note)].map((_, i) => (
                      <FontAwesomeIcon icon={faStar} style={{ color: "#0065fc" }} key={i}></FontAwesomeIcon>
                    ))}
                    {[...Array(5 - accommodations.note)].map((_, i) => (
                      <FontAwesomeIcon icon={faStar} key={i} />
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
      <p className="fz18 more-content">Afficher plus</p>
    </section>
  );
};

export default Accommodations;
