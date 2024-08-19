import styles from "./ProfileCard.module.css";
import Button from "./Button";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ProfileCard() {
  const { logout, user, dp, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/");
  }
  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate]
  );
  return (
    <div className={styles.card}>
      <img src={dp}></img>
      <p>{user}</p>
      <Button type="logout" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default ProfileCard;
