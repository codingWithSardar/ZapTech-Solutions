import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const serverURL = "http://localhost:5000";

  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate()

  const getMe = async () => {
    try {
      const response = await axios.get(serverURL + "/api/admin/me", {
        withCredentials: true,
      });

      if (response.data.success) {
        setAdmin(response.data?.admin);
        navigate("/");
      }
    } catch (error) {
      setAdmin(null);
      navigate("/admin/login");
    }
  };

  const value = {
    admin , navigate , setAdmin
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
