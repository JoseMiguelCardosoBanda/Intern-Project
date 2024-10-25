import { createContext, useContext, useState } from "react";

const CreatorContext = createContext();

export default function CreatrContextProv({ children }) {
  const [creator, setCreator] = useState("");
  return (
    <CreatorContext.Provider
      value={{
        creator,
        setCreator,
      }}
    >
      {children}
    </CreatorContext.Provider>
  );
}

export const CreatrHand = () => {
  return useContext(CreatorContext);
};
