import { useApplicationContext } from "./ApplicationContext";

function Head({ children }) {
  const { setHead } = useApplicationContext();
  setHead(children);
  return null;
}

export default Head;
