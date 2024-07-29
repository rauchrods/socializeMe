import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useToast from "./useToast";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/authSlice";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const [signOut, loading, error] = useSignOut(auth);

  const showToast = useToast();

  const handleLogout = async () => {
    try {
      const success = await signOut();
      if (success) {
        console.log("logged out succesfully");
        showToast("You are signed out successfully", "success");
        localStorage.removeItem("user-info");
        dispatch(logout());
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return { handleLogout, loading, error };
};

export default useLogout;
