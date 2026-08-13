import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agents from "./pages/Agents";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Properties */}
        <Route
          path="/properties"
          element={<Properties />}
        />

        {/* Property Details */}
        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />

        {/* Agents */}
        <Route
          path="/agents"
          element={<Agents />}
        />

        {/* Favorites */}
        <Route
          path="/favorites"
          element={<Favorites />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;