import { useApplicationContext } from "./ApplicationContext.jsx";

function Head({ children }) {
  const { setHead } = useApplicationContext();
  setHead(children);
  return null;
}

export default Head;
