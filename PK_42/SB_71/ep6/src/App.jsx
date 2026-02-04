import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import "./App.css";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${theme}`}>
      <h1>Context API State Management</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
