import {BrowserRouter} from "react-router-dom";
import "./App.css";
import NavSide from "./Components/NavSide";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import Pages from "./Pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App back-1 xl:px-16 relative">
        <div className="container lg:flex justify-between gap-5 sm:mx-auto py-16 px-4 lg:px-0">
          <Landing />
          <div>
            <Pages />
            <Footer />
          </div>
          <NavSide />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
