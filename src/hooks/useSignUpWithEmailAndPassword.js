import { auth, firestoreDb } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useToast from "./useToast";
import { useDispatch } from "react-redux";
import { login } from "../reducers/authSlice";

const useSignUpWithEmailAndPassword = () => {
  const dispatch = useDispatch();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const showToast = useToast();

  const signUp = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.fullName ||
      !inputs.userName
    ) {
      showToast("Please Enter all the required fields", "error");
      return;
    }

    const usersRef = collection(firestoreDb, "users");

    const q = query(usersRef, where("userName", "==", inputs.userName));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("Account with this username already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast(error.message, "error");
        return;
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          userName: inputs.userName,
          fullName: inputs.fullName,
          bio: "",
          profilePicUrl: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        // Add a new document in collection "users"
        await setDoc(doc(firestoreDb, "users", userDoc.uid), userDoc);

        showToast("User Created Succesfully", "success");

        localStorage.setItem("user-info", JSON.stringify(userDoc));
        dispatch(login(userDoc));
      }
    } catch (error) {
      console.log(error);
      showToast(error.message, "error");
    }
  };
  return { error, loading, signUp, user };
};

export default useSignUpWithEmailAndPassword;
