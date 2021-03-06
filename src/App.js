import "./App.css";
import Cli from "./layout/cli/Cli";
import Cloud from "./layout/cloud/Cloud";
import Footer from "./layout/footer/Footer";
import Languages from "./layout/languages/Languages";
import Navbar from "./layout/nav/Navbar";
import Showcase from "./layout/showcase/Showcase";
import Stats from "./layout/stats/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
      <Footer />
    </>
  );
}

export default App;
