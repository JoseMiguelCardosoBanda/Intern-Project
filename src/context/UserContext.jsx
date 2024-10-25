import { createContext, useContext, useState } from "react";

const UsrContext = createContext();

export default function UsrContextProv({ children }) {
  const [log, setLog] = useState(false);
  return (
    <UsrContext.Provider
      value={{
        log,
        setLog,
      }}
    >
      {children}
    </UsrContext.Provider>
  );
}

export const UsrHand = () => {
  return useContext(UsrContext);
};
