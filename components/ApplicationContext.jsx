import React from "react";
import { readFileStr } from "fs";

const importMapJSON = await readFileStr("./public/import_map.json");

const initialState = {
  head: [
    () => {
      const importMap = {
        __html: importMapJSON
      };
      return (
        <>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script type="importmap" dangerouslySetInnerHTML={importMap} />
          <script type="module" src="/.src/main.mjs" />
        </>
      );
    }
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
          (Head, index) => <Head key={`head-${index}`} />
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
