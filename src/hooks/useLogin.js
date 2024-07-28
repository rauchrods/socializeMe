import useToast from "./useToast";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, firestoreDb } from "../firebase/firebase";
import { login } from "../reducers/authSlice";

const useLogin = () => {
  const showToast = useToast();
  const dispatch = useDispatch();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginhook = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast("Please Enter all the required fields", "error");
      return;
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCred) {
        const docRef = doc(firestoreDb, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);

        console.log(docSnap.data());
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        dispatch(login(docSnap.data()));
        showToast("Logged in Successfully", "error");
      } else {
        showToast("Invalid Credentials", "error");
      }
    } catch (error) {
      showToast(error.message, "error");
      return;
    }
  };
  return { loginhook, user, loading, error };
};

export default useLogin;
