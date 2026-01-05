import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    navigate("/dashboard");
  };

  return <button onClick={login}>Login</button>;
}

export default Login;
