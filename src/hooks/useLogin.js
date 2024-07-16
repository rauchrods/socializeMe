import React from "react";
import useToast from "./useToast";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const useLogin = () => {
  const showToast = useToast();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast("Please Enter all the required fields", "error");
      return;
    }
    try {
    } catch (error) {}
  };
  return <div>useLogin</div>;
};

export default useLogin;
