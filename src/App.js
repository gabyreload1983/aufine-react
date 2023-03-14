import "./App.css";
import Banner from "./components/Banner";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Recommendations from "./components/Recommendations";
import Technology from "./components/Technology";
import TireList from "./components/TireList";
import WarrantyDetail from "./components/WarrantyDetail";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Company />
      <Technology />
      <TireList />
      <Recommendations />
      <WarrantyDetail />
      <Contact />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
