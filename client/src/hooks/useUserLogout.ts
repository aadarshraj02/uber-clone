import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return logout;
};

export default useLogout;
