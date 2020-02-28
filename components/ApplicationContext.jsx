import React from "react";

const initialState = {
  head: null,
  setHead: null
};

const ApplicationContext = React.createContext(initialState);

export function ApplicationContextProvider({ children, props, currentRoute }) {
  const [head, setHead] = React.useState(null);

  initialState.head = head;
  initialState.setHead = setHead;

  return (
    <ApplicationContext.Provider
      value={initialState}
    >
      <head>
        {/* TODO: add js files (bundled specific page and main) */}
        {initialState.head}
      </head>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplicationContext() {
  const context = React.useContext(ApplicationContext);
  return context;
}
