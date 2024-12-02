import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) navigate("/login");

  return <div>{children}</div>;
};

export default UserProtectWrapper;
