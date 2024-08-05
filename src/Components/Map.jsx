import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();
  return (
    <div>
      <h1>{lat}</h1>
      <h1>{lng}</h1>

      <button onClick={() => setSearchParams({ lat: 23, lng: 25 })}>
        Set Position
      </button>

      <div className={styles.jumpToForm} onClick={() => navigate("form")}></div>
    </div>
  );
}

export default Map;
