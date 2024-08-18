/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = { user: null, dp: null, isAuthenticated: false };

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload.username,
        dp: action.payload.dp,
        isAuthenticated: true,
      };
    case "logout":
      return { ...state, user: null, dp: null, isAuthenticated: false };

    default:
      throw new Error("invalid operation");
  }
}
const FAKE_USER = {
  name: "AB",
  password: "qwerty",
  email: "Ab@hot.com",
  avatar: "https://i.pravatar.cc/100?img=4",
};
function AuthProvider({ children }) {
  const [{ user, dp, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({
        type: "login",
        payload: { username: FAKE_USER.name, dp: FAKE_USER.avatar },
      });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, dp, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth used out of the Authentication context");
  return context;
}
export { AuthProvider, useAuth };
