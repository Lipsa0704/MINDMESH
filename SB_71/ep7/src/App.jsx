import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./features/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div className={`main ${theme}`}>
      <h1>Redux Toolkit State Management</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
