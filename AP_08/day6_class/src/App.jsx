import Navbar from "./components/Navbar";
import Login from "./components/Login";
import UserProvider from "./contexts/UserProvider";
import "./App.css";

const App = () => {
  return (
    <UserProvider>

       <Navbar />
      <Login />
    </UserProvider>
     
    
  );
};

export default App;
