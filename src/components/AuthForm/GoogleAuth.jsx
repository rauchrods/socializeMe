import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleImg from "../../assets/images/google.png";
import TextButton from "../../UI/TextButton/TextButton";
import useToast from "../../hooks/useToast";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authSlice";
import { auth, firestoreDb } from "../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth = ({ isLogIn }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const showToast = useToast();
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();

      if (!newUser && error) {
        showToast(error.message, "error");
        return;
      }

      const docRef = doc(firestoreDb, "users", newUser.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //login user
        const userDoc = docSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        dispatch(login(userDoc));
      } else {
        // signin user
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          userName: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          profilePicUrl: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        // Add a new document in collection "users"
        await setDoc(doc(firestoreDb, "users", userDoc.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        dispatch(login(userDoc));
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return (
    <div className="google-login">
      <img src={googleImg} alt="googlepng-img" />
      {/* <TextButton>{isLogIn? "Log": "Sign"} in with Google</TextButton> */}
      <p className="redirect-link" onClick={handleGoogleAuth}>
        {isLogIn ? "Log" : "Sign"} in with Google
      </p>
    </div>
  );
};

export default GoogleAuth;
