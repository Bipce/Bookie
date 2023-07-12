import Accommodations from "../components/Accommodations/Accommodations";
import Activities from "../components/Activities/Activities";
import Filters from "../components/Filters/Filters";
import Popular from "../components/Populars/Populars";

const Home = () => {
  return (
    <>
      <Filters />
      <main className="sections">
        <Popular />
        <Accommodations />
        <Activities />
      </main>
    </>
  );
};

export default Home;
