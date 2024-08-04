import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <HomePage /> : <Navigate to={"auth"} />}
        />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to={"/"} /> : <AuthPage />}
        />
        <Route
          path="/user/:userName"
          element={currentUser ? <ProfilePage /> : <Navigate to={"/auth"} />}
        />
      </Routes>
    </PageLayout>
  );
}

export default App;
