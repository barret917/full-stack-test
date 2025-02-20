import React, { createContext, useState } from 'react';

export const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refreshCount, setRefreshCount] = useState(0);

  const triggerRefresh = () => setRefreshCount((prev) => prev + 1);

  return (
    <RefreshContext.Provider value={{ refreshCount, triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};
