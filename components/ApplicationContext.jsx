import React from "react";

const initialState = {
  head: [
    () => <meta name="viewport"
      content="width=device-width, initial-scale=1.0" />
  ],
  setHead: null
};

const ApplicationContext = React.createContext(initialState);

export function ApplicationContextProvider({ children, props, currentRoute }) {
  // TODO: Add logic to replace default heads
  const [head, setHead] = React.useState(initialState.head);

  initialState.head = head;
  initialState.setHead = setHead;

  return (
    <ApplicationContext.Provider
      value={initialState}
    >
      <head>
        {/* TODO: add js files (bundled specific page and main) */}
        {initialState.head.map(
          (Option, index) => <Option key={`head-${index}`} />
        )}
      </head>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplicationContext() {
  const context = React.useContext(ApplicationContext);
  return context;
}
