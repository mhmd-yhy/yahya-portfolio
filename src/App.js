import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Pages from "./Pages/Pages";

function App() {


  return (
    <div className="App back-1 xl:px-16 relative min-h-screen">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
