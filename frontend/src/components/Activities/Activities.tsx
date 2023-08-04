import { useEffect, useState } from "react";
import { IActivities } from "../../models/activities";
import { getActivities } from "../../services/backend";
import "./Activities.css";
import { Link } from "react-router-dom";

const Activities = () => {
  const [activities, setActivities] = useState<IActivities[]>();

  useEffect(() => {
    (async () => {
      setActivities(await getActivities());
    })();
  }, []);

  return (
    <section className="activities--section common">
      <h2 className="activities--section__title fz22">Activités à Marseille</h2>

      <div className="activities--box common--articles--box">
        {activities?.map(activitie => {
          return (
            <Link to={`/activitie/${activitie._id}`} key={activitie._id}>
              <article className="activities--box__article common--articles--box__article ">
                <img
                  src={`http://localhost:3000/images/activities/${activitie.photo}`}
                  alt={activitie.name}
                  className="activities--box__article--img"
                />
                <h2 className="activities--box__article--title fz16">{activitie.name}</h2>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;
