import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faStar } from "@fortawesome/free-solid-svg-icons";
import { getAccommodations } from "../../services/backend";
import { useEffect, useState } from "react";
import { IAccommodation } from "../../models/accommodations";
import { Link } from "react-router-dom";
import "./Popular.css";

const Popular = () => {
  const [populars, setPopupars] = useState<IAccommodation[]>();

  useEffect(() => {
    (async () => {
      setPopupars(await getAccommodations(true));
    })();
  }, []);

  return (
    <section className="popular-box">
      <div>
        <h2 className="fz22 flex-justify-sb popular-title">
          Les plus populaires
          <FontAwesomeIcon icon={faChartLine} className="color-primary" />
        </h2>
      </div>

      <div className="poupular-box__articles">
        {populars?.map(popular => {
          return (
            <Link to="/" key={popular._id}>
              <article className="popular-article">
                <img
                  src={`http://localhost:3000/images/accommodations/${popular.photo}`}
                  alt={popular.name}
                  className="popular-img"
                />

                <div className="popular-content flex-column flex-justify-sb">
                  <div className="popular-name-price flex-column">
                    <h2 className="fz16">{popular.name}</h2>
                    <p>
                      Nuit à partir de {popular.price}
                      <strong>€</strong>
                    </p>
                  </div>

                  <div className="popular-note">
                    {[...Array(popular.note)].map((_, i) => (
                      <FontAwesomeIcon icon={faStar} style={{ color: "#0065fc" }} key={i} />
                    ))}
                    {[...Array(5 - popular.note)].map((_, i) => (
                      <FontAwesomeIcon icon={faStar} key={i} />
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
