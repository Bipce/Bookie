import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getAccommodations } from "../../services/backend";
import { IAccommodation } from "../../models/accommodations";
import "./Accommodations.css";
import "../AccomodationsPopulars.css";

const Accommodations = () => {
  const [accommodations, setAccommodations] = useState<IAccommodation[]>();

  useEffect(() => {
    (async () => {
      setAccommodations(await getAccommodations(false));
    })();
  }, []);

  return (
    <section className="accommodation--box common flex-column">
      <div>
        <h2 className="fz22">Hébergements à Marseille</h2>
      </div>

      <div className="accommodation--box__articles common--articles--box">
        {accommodations?.map(accommodations => {
          return (
            <Link to="" key={accommodations._id}>
              <article className="accommodation--box__articles--article common--articles--box__article flex-column">
                <img
                  src={`http://localhost:3000/images/accommodations/${accommodations.photo}`}
                  alt={accommodations.name}
                  className="accommodation--box__articles--img"
                />

                <div className="accommodation--box__articles--content flex-column">
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
