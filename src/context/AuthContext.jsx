import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// In-memory user store (just for mock testing)
let mockUsers = [
  { email: "test@example.com", password: "12345678", name: "Test User" },
];

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Sync user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // 🔐 Login function
  const login = async (email, password) => {
    const existingUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!existingUser) throw new Error("User not found");
    setUser(existingUser);
  };

  // 📝 Signup function
  const signup = async (name, email, password) => {
    const userExists = mockUsers.find((u) => u.email === email);
    if (userExists) throw new Error("Email already registered");

    const newUser = { name, email, password };
    mockUsers.push(newUser);
    setUser(newUser);
  };

  // 🔓 Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // ✏️ Update profile (name, avatar)
  const updateProfile = ({ name, avatar }) => {
    setUser((prevUser) => {
      const updatedUser = {
        ...prevUser,
        ...(name && { name }),
        ...(avatar && { avatar }),
      };

      // Also update mockUsers
      const index = mockUsers.findIndex((u) => u.email === prevUser.email);
      if (index !== -1) mockUsers[index] = updatedUser;

      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  // 🔐 Change password
  const changePassword = async (currentPassword, newPassword) => {
    if (user.password !== currentPassword) {
      throw new Error("Current password is incorrect");
    }

    setUser((prevUser) => {
      const updatedUser = { ...prevUser, password: newPassword };

      // Also update mockUsers
      const index = mockUsers.findIndex((u) => u.email === prevUser.email);
      if (index !== -1) mockUsers[index] = updatedUser;

      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateProfile, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use context
export const useAuth = () => useContext(AuthContext);
