import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { getPopular } from "../../services/popular";
import { useEffect, useState } from "react";
import { IAccommodation } from "../../models/accommodations";

const Popular = () => {
  const [populars, setPopupars] = useState<IAccommodation[]>();

  useEffect(() => {
    (async () => {
      setPopupars(await getPopular());
    })();
  }, []);

  return (
    <main className="populars-container">
      <h2>
        Les plus populaires
        <FontAwesomeIcon icon={faChartLine} />
      </h2>

      <section className="popular-box">
        {populars?.map(popular => {
          return (
            <article key={popular._id}>
              <div className="popular-img">
                <img src={`http://localhost:3000/images/accommodations/${popular.photo}`} alt={popular.name} />
              </div>
              <div className="popular-content">
                <h2>{popular.name}</h2>
                <p>
                  Nuit à partir de {popular.price}
                  <strong>€</strong>
                </p>
                <div className="popular-note">
                  <p>{popular.note}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Popular;
