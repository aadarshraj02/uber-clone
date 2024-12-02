import { createContext, useState } from "react";

export const CaptainDataContext = createContext<any>({
  user: { email: "", fullname: { firstName: "", lastName: "" } },
  setCaptain: () => {},
});

const CaptainContext = ({ children }: any) => {
  const [captain, setCaptain] = useState({
    email: "",
    fullname: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
