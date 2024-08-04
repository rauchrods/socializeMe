// reducers/index.js
import { combineReducers } from "redux";
import authSlice from "./authSlice";
import userProfileSlice from "./userProfileSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  userProfileStore: userProfileSlice,
  // Add more reducers here if needed
});

export default rootReducer;
