import React, { useState } from "react";
import Layout from "../user/layout/Layout";
import { register } from "../user/services/api";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        username,
        email,
        password,
        password2,
      };
      await register(formData)
      nav('/sign-up')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="rounded shadow-sm py-10 px-20 bg-white w-2/4">
        <p className="text-center font-bold text-2xl">Register</p>
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
              Email
            </label>
            <input
              type="email"
              className="border-black w-full p-2 border-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="border-black w-full p-2 border-2 rounded"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link to={'/sign-in'}>Login now</Link>
        </small>
      </div>
    </Layout>
  );
}

export default Register;
