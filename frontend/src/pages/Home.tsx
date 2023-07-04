import Accommodations from "../components/Accommodations/Accommodations";
import Filters from "../components/Filters/Filters";
import Popular from "../components/Popular/Popular";

const Home = () => {
  return (
    <>
      <Filters />
      <main className="flex-column">
        <Popular />
        <Accommodations />
      </main>
    </>
  );
};

export default Home;
