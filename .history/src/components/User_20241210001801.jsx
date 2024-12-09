import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserInfo,
  addUser,
  updateUser,
  deleteUser,
} from "../redux/userSlice";

const UserPage = () => {
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

  // Handle update user action
  const handleUpdateUser = () => {
    if (userInfo.password !== userInfo.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(updateUser(userInfo));
  };

  // Handle delete user action
  const handleDeleteUser = (email) => {
    dispatch(deleteUser(email));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      <div className="w-full max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
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
              className="w-full mt-1 p-2 border rounded-md"
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
              className="w-full mt-1 p-2 border rounded-md"
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
              className="w-full mt-1 p-2 border rounded-md"
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
              className="w-full mt-1 p-2 border rounded-md"
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
              className="w-full mt-1 p-2 border rounded-md"
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
              className="w-full mt-1 p-2 border rounded-md"
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
              className="w-full mt-1 p-2 border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleAddUser}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add User
            </button>
            <button
              type="button"
              onClick={handleUpdateUser}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Update User
            </button>
          </div>
        </form>
      </div>

      <h2 className="text-xl font-semibold mt-6">Existing Users</h2>
      <div className="mt-4">
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map((user, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-sm flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={() => handleDeleteUser(user.email)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
