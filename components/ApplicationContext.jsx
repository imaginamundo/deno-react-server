import React from "react";

const initialState = {
  head: null
};
const ApplicationContext = React.createContext(initialState);

export function ApplicationContextProvider({ children }) {
  return (
    <ApplicationContext.Provider
      value={initialState}
    >
      <head>
        {initialState.head}
      </head>
      {children}
    </ApplicationContext.Provider>
  );
}

// export function useApplicationContext() {
//     const context = useContext(ApplicationContext);
//     return context;
// };
