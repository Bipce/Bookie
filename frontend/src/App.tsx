import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Accommodation from "./pages/Accommodation/Accommodation";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
