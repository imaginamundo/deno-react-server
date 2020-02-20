import React from "react";

const initialState = {
  route: null,
  head: null,
  setHead: null
};

const ApplicationContext = React.createContext(initialState);

export function ApplicationContextProvider({ children }) {
  // const [ head, setHead ] = useState(null);
  // initialState.head = head;
  // initialState.setHead = setHead;

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
