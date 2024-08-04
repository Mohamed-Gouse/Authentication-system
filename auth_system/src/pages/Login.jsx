import React, { useState } from "react";
import Layout from "../user/layout/Layout";
import { loginApi } from "../user/services/api";
import { useDispatch } from "react-redux";
import { login } from "../app/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const formData = {
        username,
        password,
      };

      const data = await loginApi(formData);
      dispatch(login(data));
      nav("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Layout>
      <div className="rounded shadow-sm py-10 px-20 bg-white w-2/4">
        <p className="text-center font-bold text-2xl">Login</p>
        <hr className="my-5" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              className="border-black w-full p-2 border-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="border-black w-full p-2 border-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <small>
          Don't have an account? <Link to={'/sign-up'}>Create now</Link>
        </small>
      </div>
    </Layout>
  );
}

export default Login;
