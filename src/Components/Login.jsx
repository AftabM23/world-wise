import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/FakeAuthContext";
import style from "./Login.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("Ab@hot.com");
  const [password, setPassword] = useState("qwerty");

  function handleSubmit(e, password, email) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <div>
      <form
        className={style.login}
        // onSubmit={(e) => handleSubmit(e, password, email)}
      >
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Button onClick={(e) => handleSubmit(e, password, email)}>Login</Button>
      </form>
    </div>
  );
}

export default Login;
