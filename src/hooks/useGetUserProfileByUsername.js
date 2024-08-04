import React, { useEffect, useState } from "react";
import useToast from "./useToast";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDb } from "../firebase/firebase";
import { setUserProfile } from "../reducers/userProfileSlice";

const useGetUserProfileByUsername = (userName) => {
  const [isLoading, setIsLoading] = useState(false);

  const showToast = useToast();
  const dispatch = useDispatch();
  const userProfile = useSelector(
    (state) => state.userProfileStore.userProfile
  );

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestoreDb, "users"),
          where("userName", "==", userName)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return dispatch(setUserProfile(null));
        }

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        console.log(userDoc);
        dispatch(setUserProfile(userDoc));
      } catch (error) {
        showToast(error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, []);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
