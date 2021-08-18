import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../Routes/Routes";
import Navigation from "../Navigation/Navigation";
import { AuthProvider } from "../contexts/AuthContext";

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


<<<<<<< HEAD

TEST 2222
=======
TEEEEST
>>>>>>> dev
