import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import { profileFetch } from "../services/api";

function Profile() {
  const { access } = useSelector((state) => state.auth);
  const [user, setUser] = useState({});

  const fetchProfile = async () => {
    try {
      const data = await profileFetch(access);
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Layout>
      <div className="bg-white rounded shadow p-8 w-full max-w-lg mx-auto text-end">
        <p className="text-center text-2xl font-bold mb-6">Profile</p>
        <hr className="mb-6" />
        <div className="flex">
          <table className="w-3/4 text-left me-5">
            <tbody>
              <tr className="border-b">
                <th className="py-3 px-4 font-medium text-gray-700">
                  Username
                </th>
                <td className="py-3 px-4 text-gray-600 capitalize">
                  {user.username}
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-4 font-medium text-gray-700">
                  Full name
                </th>
                <td className="py-3 px-4 text-gray-600">
                  {user.profile?.full_name}
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-4 font-medium text-gray-700">Email</th>
                <td className="py-3 px-4 text-gray-600">{user.email}</td>
              </tr>
              <tr>
                <th className="py-3 px-4 font-medium text-gray-700">Bio</th>
                <td className="py-3 px-4 text-gray-600">{user.profile?.bio}</td>
              </tr>
            </tbody>
          </table>
          <img
            src={user.profile?.image}
            alt="Profile Pic"
            style={{ height: "200px" }}
            className="border-2"
          />
        </div>
        <button className="px-3 py-2 rounded bg-gray-400 shadow hover:bg-gray-600 font-bold text-gray-200 mt-5">Edit Profile</button>
      </div>
    </Layout>
  );
}

export default Profile;
