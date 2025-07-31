import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

export default function Profile() {
  const { user, updateProfile, changePassword } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSave = () => {
    if (!name && !avatarFile) {
      toast.error("No changes to save.");
      return;
    }
    updateProfile({ name, avatar: avatarPreview });
    toast.success("Profile updated!");
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill all password fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      changePassword(currentPassword, newPassword);
      toast.success("Password updated");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.message || "Error changing password");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 font-sans text-gray-800">
      <h1 className="text-3xl font-semibold mb-8">My Profile</h1>

      {/* Avatar + Name Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
            <img
              src={
                avatarPreview ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />

            <button
              onClick={handleProfileSave}
              className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-medium mb-4">Change Password</h2>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            onClick={handleChangePassword}
            className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
