import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <ToggleThemeBtn />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
