import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function onsubmit() {
    navigate("/dashboard");
  }
  return (
    <div>
      <h1>login page</h1>
      <button onClick={onsubmit}>login button</button>
    </div>
  );
};

export default Login;
