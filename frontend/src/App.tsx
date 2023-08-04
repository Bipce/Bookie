import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Accommodation from "./pages/Accommodation";
import Activitie from "./pages/Activitie";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/activitie/:id" element={<Activitie />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
