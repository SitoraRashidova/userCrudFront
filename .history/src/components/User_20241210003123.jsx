import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserInfo,
  addUser,
  updateUser,
  deleteUser,
} from "../redux/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const users = useSelector((state) => state.user.users);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInfo({ ...userInfo, [name]: value }));
  };

  const handleAddUser = () => {
    if (userInfo.password !== userInfo.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(addUser());
  };

  const handleUpdateUser = () => {
    if (userInfo.password !== userInfo.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(updateUser(userInfo));
  };

  const handleDeleteUser = (email) => {
    dispatch(deleteUser(email));
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        User Information Management
      </h1>

      {/* Form Section */}
      <div className="w-full max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-200">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={userInfo.age}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={userInfo.confirmPassword}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={userInfo.gender}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between space-x-4 mt-6">
            <button
              type="button"
              onClick={handleAddUser}
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add User
            </button>
            <button
              type="button"
              onClick={handleUpdateUser}
              className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Update User
            </button>
          </div>
        </form>
      </div>

      {/* Existing Users Section */}
      <h2 className="text-xl font-semibold text-gray-800 mt-12">
        Existing Users
      </h2>
      <div className="mt-6">
        {users.length > 0 ? (
          <ul className="space-y-6">
            {users.map((user, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-6 bg-white shadow-md rounded-lg hover:bg-gray-50 transition duration-200"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={() => handleDeleteUser(user.email)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
