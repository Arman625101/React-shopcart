import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../Routes/Routes";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes />
    </Router>
  );
}

export default App;
