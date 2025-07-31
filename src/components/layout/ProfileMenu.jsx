import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, User } from "lucide-react";
import { useMemo } from "react";
import toast from "react-hot-toast";

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu on click
  const toggleMenu = () => setOpen((prev) => !prev);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    toast("Logged out");
    logout();
    setOpen(false);
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
    setOpen(false);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setOpen(false);
  };

 const avatar = useMemo(() => {
  return user?.name ? user.name[0].toUpperCase() : "";
}, [user?.name]);

  return (
    <div className="relative" ref={menuRef}>
      <button
  onClick={toggleMenu}
  className="w-10 h-10 z-50 relative rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold hover:bg-gray-300 transition"
>
 {user ? (
  user.avatar ? (
    <img
      src={user.avatar}
      alt="avatar"
      className="w-10 h-10 rounded-full object-cover"
    />
  ) : (
    <span className="text-sm font-bold">{avatar}</span>
  )
) : (
  <User size={20} />
)}


</button>

      <AnimatePresence>
        {open && (
   <motion.div
  initial={{ opacity: 0, y: -8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -8 }}
  transition={{ duration: 0.2 }}
  className="absolute mt-2 w-48 bg-white shadow-lg rounded-xl z-50 
             md:top-full md:mt-2 
             bottom-full mb-2 md:mb-0"
>
            <div className="py-2 text-sm text-gray-800">
              {user && (
               <p title={user.name}>Hi, {user.name?.split(" ")[0]}</p>

              )}
              {!user ? (
                <button
                  onClick={handleLoginClick}
                  className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
                >
                  <LogIn size={16} /> Login
                </button>
              ) : (
                <>
                  <button
                    onClick={handleProfileClick}
                    className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
                  >
                    <User size={16} /> Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-red-500"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
