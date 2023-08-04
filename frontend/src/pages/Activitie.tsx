import { useEffect, useState } from "react";
import { IActivities } from "../models/activities";
import { Link, useParams } from "react-router-dom";
import { getActivitie } from "../services/backend";
import "./Detail.css";

const Activitie = () => {
  const [activitie, setActivitie] = useState<IActivities>();

  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  useEffect(() => {
    (async () => {
      setActivitie(await getActivitie(id));
    })();
  }, []);

  if (!activitie) return null;

  return (
    <section className="detail--section margin-wrapper" id="accommodations">
      <h2 className="detail--section__title fz22">{activitie.name}</h2>

      <article className="detail--box common--articles--box__article">
        <Link to={`http://localhost:3000/images/activities/${activitie.photo}`} className="detail--box__link">
          <img
            src={`http://localhost:3000/images/activities/${activitie.photo}`}
            alt={activitie.name}
            className="detail--box__img"
          />
        </Link>

        <div className="detail--box__content detail--box__content--activite fz16">
          <button className="detail--box__btn fz22">Réserver</button>
        </div>
      </article>
    </section>
  );
};

export default Activitie;
