import styles from "./ProfileCard.module.css";
import Button from "./Button";
import { useAuth } from "../Contexts/FakeAuthContext";

function ProfileCard() {
  const { logout, user, dp } = useAuth();
  function handleLogout() {
    logout();
  }
  return (
    <div className={styles.card}>
      <img src={dp}></img>
      <p>{user}</p>
      <Button type="logout" onClick={handleLogout}>
        logout
      </Button>
    </div>
  );
}

export default ProfileCard;
