import React, { createContext, useState } from 'react';

export const RefreshContext = createContext({
  refreshCount: 0,
  triggerOrderRefresh: () => {},
});

export const RefreshProvider = ({ children }) => {
  const [refreshCount, setRefreshCount] = useState(0);

  
  const triggerOrderRefresh = () => {
    setRefreshCount((prev) => prev + 1);
  };

  return (
    <RefreshContext.Provider value={{ refreshCount, triggerOrderRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};
