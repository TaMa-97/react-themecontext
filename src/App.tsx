import React from "react";
import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

function App() {
  // useTheme から theme と toggleTheme を取得
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`gWrapper -${theme}`}>
      <div className="modBlock">
        <button onClick={toggleTheme}>テーマを切り替える</button>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
