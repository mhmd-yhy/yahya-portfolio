import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Pages from "./Pages/Pages";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const Change_Theme = (theme) => { setTheme(theme); };
  return (
    <div className={`App ${theme} `}>
      <div className="bg-Back-Light dark:bg-Back-Dark xl:px-16 relative min-h-screen">
        <ThemeContext.Provider value={{ theme, Change_Theme }}>
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
