import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/authSlice";

function Dashboard() {
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Layout>
      <p className="text-4xl font-bold">DashBoard</p>
      <div className="mt-3">
        {!isLogged ? (
          <>
            <Link
              to={"/sign-in"}
              className="mx-1 px-3 py-2 bg-blue-500 rounded shadow font-bold text-white hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to={"/sign-up"}
              className="mx-1 px-3 py-2 bg-blue-500 rounded shadow font-bold text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <button
              className="mx-1 px-3 py-2 bg-blue-500 rounded shadow font-bold text-white hover:bg-blue-700"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
            <Link
              to={"/profile"}
              className="mx-1 px-3 py-2 bg-blue-500 rounded shadow font-bold text-white hover:bg-blue-700"
            >
              Profile
            </Link>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
