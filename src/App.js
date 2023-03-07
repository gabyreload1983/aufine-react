import "./App.css";
import Banner from "./components/Banner";
import Company from "./components/Company";
import NavBar from "./components/NavBar";
import Technology from "./components/Technology";
import TireList from "./components/TireList";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Company />
      <Technology />
      <TireList />
      <Whatsapp />
    </>
  );
}

export default App;
