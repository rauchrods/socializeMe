import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";
import useToast from "../../hooks/useToast";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  console.log(inputs);

  const { error, loading, signUp, user } = useSignUpWithEmailAndPassword();

  const [showPassword, setShowPassword] = useState(false);

  const showToast = useToast();

  const showPasswordHandler = () => {
    setShowPassword((currState) => !currState);
  };

  const inputsHandler = (name, value) => {
    setInputs((currInputs) => ({ ...currInputs, [name]: value.trim() }));
  };

  if (user) {
    setInputs({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    });

    navigate("/");
  }

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
        type="text"
        name="userName"
        placeholder="Username"
        value={inputs.userName}
        onChange={(e) => inputsHandler(e.target.name, e.target.value)}
      />
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={inputs.fullName}
        onChange={(e) => inputsHandler(e.target.name, e.target.value)}
      />

      <div className="password-group">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={(e) => inputsHandler(e.target.name, e.target.value)}
        />
        <span onClick={showPasswordHandler}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </div>

      <Button
        style={{
          width: "100%",
        }}
        disabled={loading}
        onClick={() => signUp(inputs)}
      >
        Sign up
      </Button>
    </>
  );
};

export default SignUp;
