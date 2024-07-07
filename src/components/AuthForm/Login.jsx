import { useState } from "react";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const inputsHandler = (name, value) => {
    setInputs((currInputs) => ({ ...currInputs, [name]: value }));
  };

  const handleAuth = () => {
    if (inputs.email === "" || inputs.password === "") {
      alert("Please enter all the fields");
      return;
    }

    console.log("Success!: ", inputs);

    navigate("/");
  };

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
        onClick={handleAuth}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
