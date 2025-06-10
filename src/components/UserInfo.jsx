import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  if (!user) return null;

  return (
    <div className="text-center mb-2">
      <small className="d-block fw-semibold">
        👋 Hello, {user.displayName || "User"} you already logged in.
      </small>
    </div>
  );
};

export default UserInfo;
