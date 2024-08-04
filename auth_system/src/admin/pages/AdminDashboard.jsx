import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../layout/AdminLayout";
import { logout } from "../../app/authSlice";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const dispatch = useDispatch();
  return (
    <AdminLayout>
      <p className="text-4xl font-bold">DashBoard</p>
      <div className="mt-3">
        <button
          className="mx-1 px-3 py-2 bg-blue-500 rounded shadow font-bold text-white hover:bg-blue-700"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
        <Link
          to={"/admin/users"}
          className="mx-1 px-3 py-2 bg-blue-500 rounded shadow font-bold text-white hover:bg-blue-700"
        >
          Users List
        </Link>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
