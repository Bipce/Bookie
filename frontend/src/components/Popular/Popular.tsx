import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faStar } from "@fortawesome/free-solid-svg-icons";
import { getPopular } from "../../services/popular";
import { useEffect, useState } from "react";
import { IAccommodation } from "../../models/accommodations";
import { Link } from "react-router-dom";
import "./Popular.css";

const Popular = () => {
  const [populars, setPopupars] = useState<IAccommodation[]>();

  useEffect(() => {
    (async () => {
      setPopupars(await getPopular());
    })();
  }, []);

  return (
    <main className="bck-color-secondary">
      <div className="margin-wrapper">
        <section className="popular-box flex-column">
          <h2 className="fz22 flex-justify-sb">
            Les plus populaires
            <FontAwesomeIcon icon={faChartLine} className="color-primary" />
          </h2>

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
                    <div className="popular-note">{popular.note < 5 && <FontAwesomeIcon icon={faStar} />}</div>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Popular;
