import { createContext, useState } from "react";

export const UserDataContext = createContext<any>(null);

const UserContext = ({ children }: any) => {
  const [user, setUser] = useState({
    email: "",
    fullname: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
