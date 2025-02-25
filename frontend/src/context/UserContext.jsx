import { createContext, use, useContext, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  async function loginUser(email, password, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, {
        email,
        password,
      });
      toast.success(data.message);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setIsAuth(true);
      setBtnLoading(false);
      navigate("/");
    } catch (error) {
      setBtnLoading(false);
      serAuth(false);
      toast.error(error.response.data.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        isAuth,
        setIsAuth,
        btnLoading,
        setBtnLoading,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};
export const UserData = () => useContext(UserContext);
