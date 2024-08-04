import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: null,
};

export const userProfileSlice = createSlice({
  name: "userProfileStore",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },

    //addPost()
  },
});

export const { setUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
