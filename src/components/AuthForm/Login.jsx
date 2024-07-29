import { useState } from "react";
import Button from "../../UI/Button/Button";
import useLogin from "../../hooks/useLogin";
import MyLoader from "../../UI/Loader/MyLoader";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const inputsHandler = (name, value) => {
    setInputs((currInputs) => ({ ...currInputs, [name]: value }));
  };

  const { loginhook, user, loading, error } = useLogin();

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={inputs.email}
        onChange={(e) => inputsHandler(e.target.name, e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={(e) => inputsHandler(e.target.name, e.target.value)}
      />

      <Button
        style={{
          width: "100%",
        }}
        disabled={loading}
        onClick={() => loginhook(inputs)}
      >
        {loading ? <MyLoader size={"18px"} /> : "Login"}
      </Button>
    </>
  );
};

export default Login;
