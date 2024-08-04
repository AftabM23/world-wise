import style from "./Login.module.css";
function Login() {
  return (
    <div>
      <form className={style.login}>
        <label>Email address</label>
        <input type="email"></input>

        <label>Password</label>
        <input type="password"></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Login;
