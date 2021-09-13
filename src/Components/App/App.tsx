import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../Routes/Routes";
import Navigation from "../Navigation/Navigation";
import { AuthProvider } from "../../context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
