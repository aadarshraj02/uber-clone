import { useEffect } from "react";
import useLogout from "../hooks/useUserLogout";

const UserLogout = () => {
  const logout = useLogout();

  useEffect(() => {
    logout();
  }, [logout]);

  return <div>UserLogout</div>;
};

export default UserLogout;
