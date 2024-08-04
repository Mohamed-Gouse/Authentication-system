import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./user/pages/Dashboard";
import Profile from "./user/pages/Profile";
import EditProfile from "./user/pages/EditProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./admin/pages/AdminDashboard";
import { useSelector } from "react-redux";
import UsersList from "./admin/pages/UsersList";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { isLogged, role } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route
          path="/sign-in"
          element={
            isLogged && role === "user" ? (
              <Navigate to={"/"} />
            ) : isLogged && role === "admin" ? (
              <Navigate to={"/admin/dashboard"} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/sign-up"
          element={
            isLogged && role === "user" ? (
              <Navigate to={"/"} />
            ) : isLogged && role === "admin" ? (
              <Navigate to={"/admin/dashboard"} />
            ) : (
              <Register />
            )
          }
        />

        <Route path="/" element={<Dashboard />} />
        <Route
          path="/profile"
          element={
            isLogged && role === "user" ? <Profile /> : <Navigate to={"/"} />
          }
        />
        <Route
          path="/profile/edit"
          element={
            isLogged && role === "user" ? (
              <EditProfile />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            isLogged && role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route
          path="/admin/users"
          element={
            isLogged && role === "admin" ? <UsersList /> : <Navigate to={"/"} />
          }
        />
        <Route
          path="/*"
          element={
            <PageNotFound />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
