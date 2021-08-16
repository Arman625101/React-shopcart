import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    // setError("");
    try {
      logout();
      history.push("/products");
    } catch {
      // setError("Failed to log out");
    }
  };

  return (
    <div className="profile">
      <h2>{currentUser && currentUser.username}</h2>
      <h1>{currentUser && currentUser.email}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;
